import { IncomingMessage, ServerResponse } from 'http';
import { getFacebookPosts } from '../src/fb-posts-helper';

/**
 * Vercel serverless function — publicaciones reales de la página de Facebook.
 *
 * Endpoint: GET /api/facebook-posts
 *
 * Requiere la variable de entorno FB_PAGE_ACCESS_TOKEN (ver src/fb-posts-helper).
 * El token vive SOLO en el servidor; el cliente nunca lo recibe.
 */

function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export default async function handler(_req: IncomingMessage, res: ServerResponse): Promise<void> {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');

  try {
    const result = await getFacebookPosts();
    if (!result.ok) {
      json(res, 503, result);
      return;
    }
    json(res, 200, result);
  } catch (err) {
    json(res, 500, { error: err instanceof Error ? err.message : 'Error interno' });
  }
}

export const config = { api: { bodyParser: false } };