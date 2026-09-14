/**
 * Lógica compartida para obtener publicaciones reales de la página de
 * Facebook vía Graph API. La usa el servidor Express (SSR) y la serverless
 * function de Vercel (/api/facebook-posts).
 *
 * Variable de entorno requerida: FB_PAGE_ACCESS_TOKEN
 *  - Consíguelo en https://developers.facebook.com/tools/explorer
 *    (permisos: pages_read_engagement)
 *  - Extiéndelo a token de larga duración (fb_exchange_token).
 *  - Configúralo en el entorno del host; NUNCA debe viajar al cliente.
 */

const PAGE_ID = '61578933820425';
const GRAPH_VERSION = 'v23.0';
const POST_LIMIT = 9;

export interface FbPost {
  id: string;
  texto: string;
  fecha: string;
  categoria: string;
  likes: number | null;
  comentarios: number | null;
  compartidos: number | null;
  imagen?: string;
  link?: string;
}

interface GraphPost {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  full_picture?: string;
  permalink_url?: string;
}

function normalizeDate(iso: string): string {
  const t = new Date(iso).getTime();
  const diff = Date.now() - t;
  const min = Math.floor(diff / 60000);
  const hr = Math.floor(min / 60);
  const dia = Math.floor(hr / 24);

  if (min < 1) return 'Recién publicado';
  if (min < 60) return `Hace ${min} min`;
  if (hr < 24) return `Hace ${hr} h`;
  if (dia < 7) return `Hace ${dia} d`;
  return new Date(iso).toLocaleDateString('es-GT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export async function getFacebookPosts(): Promise<{
  ok: boolean;
  posts: FbPost[];
  error?: string;
}> {
  const token = process.env['FB_PAGE_ACCESS_TOKEN'];
  if (!token) {
    return { ok: false, posts: [], error: 'FB_PAGE_ACCESS_TOKEN no configurado' };
  }

  const url =
    `https://graph.facebook.com/${GRAPH_VERSION}/${PAGE_ID}/feed` +
    `?fields=id,message,story,created_time,full_picture,permalink_url&limit=${POST_LIMIT}` +
    `&access_token=${encodeURIComponent(token)}`;

  const res = await fetch(url, { headers: { accept: 'application/json' } });
  const data = (await res.json()) as {
    data?: GraphPost[];
    error?: { message: string };
  };

  if (!res.ok || data.error || !Array.isArray(data.data)) {
    return {
      ok: false,
      posts: [],
      error: data.error?.message ?? 'No se pudo consultar la Graph API'
    };
  }

  const posts: FbPost[] = data.data
    .filter((p) => (p.message ?? p.story ?? '').trim().length)
    .slice(0, POST_LIMIT)
    .map((p) => ({
      id: p.id,
      texto: (p.message ?? p.story ?? '').trim(),
      fecha: normalizeDate(p.created_time),
      categoria: 'Publicación',
      likes: null,
      comentarios: null,
      compartidos: null,
      imagen: p.full_picture || undefined,
      link: p.permalink_url || `https://www.facebook.com/${PAGE_ID}`
    }));

  return { ok: true, posts };
}