import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { from, Observable, of } from 'rxjs';

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

export interface FbFeedResponse {
  ok: boolean;
  posts: FbPost[];
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class FbPostsService {
  readonly pageUrl = 'https://www.facebook.com/profile.php?id=61578933820425';
  readonly pageName = 'Centro Médico Los Sables';

  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Lista inicial (curated): garantiza contenido visible aunque la Graph API
   * no esté conectada aún (sin token o servidor sin la variable de entorno).
   */
  readonly posts: FbPost[] = [
    {
      id: 'post-1',
      texto:
        '🩺 Tu salud es nuestra prioridad. En Centro Médico Los Sables contamos con medicina general y múltiples especialidades. Agenda tu cita por WhatsApp.',
      fecha: 'Hace 2 días',
      categoria: 'Salud y bienestar',
      likes: 47,
      comentarios: 6,
      compartidos: 4,
      imagen: 'assets/medicos.avif',
      link: this.pageUrl
    },
    {
      id: 'post-2',
      texto:
        '🤰 Ginecología y obstetricia con un trato cálido y profesional. Acompañamos cada etapa de tu vida con ciencia y empatía.',
      fecha: 'Hace 5 días',
      categoria: 'Especialidades',
      likes: 62,
      comentarios: 9,
      compartidos: 7,
      imagen: 'assets/noelia.avif',
      link: this.pageUrl
    },
    {
      id: 'post-3',
      texto:
        '🧪 Laboratorio clínico con resultados rápidos y confiables. Diagnósticos precisos para decisiones médicas oportunas.',
      fecha: 'Hace 1 semana',
      categoria: 'Laboratorio',
      likes: 53,
      comentarios: 5,
      compartidos: 8,
      imagen: 'assets/labs.avif',
      link: this.pageUrl
    },
    {
      id: 'post-4',
      texto:
        '👶 Pediatría dedicada al cuidado integral de tus pequeños. Seguimiento cercano en cada etapa de crecimiento.',
      fecha: 'Hace 1 semana',
      categoria: 'Pediatría',
      likes: 71,
      comentarios: 12,
      compartidos: 9,
      imagen: 'assets/fernanda.avif',
      link: this.pageUrl
    },
    {
      id: 'post-5',
      texto:
        '💙 Emergencias 24/7 en Tecpán Guatemala. Estamos contigo cuando más nos necesitas.',
      fecha: 'Hace 2 semanas',
      categoria: 'Emergencias',
      likes: 89,
      comentarios: 14,
      compartidos: 11,
      imagen: 'assets/medicos3.avif',
      link: this.pageUrl
    },
    {
      id: 'post-6',
      texto:
        '🦷 Cirugía maxilofacial: precisión quirúrgica y trato humano para mejorar salud, funcionalidad y estética.',
      fecha: 'Hace 2 semanas',
      categoria: 'Especialidades',
      likes: 38,
      comentarios: 3,
      compartidos: 5,
      imagen: 'assets/Rolando.avif',
      link: this.pageUrl
    }
  ];

  /**
   * Publicaciones reales desde la Graph API (vía /api/facebook-posts).
   * Devuelve la lista inicial si la conexión falla o no existe el token.
   */
  livePosts(): Observable<FbPost[]> {
    if (!this.isBrowser) {
      return of(this.posts);
    }

    return from(
      fetch('/api/facebook-posts', { headers: { accept: 'application/json' } })
        .then((r) => r.json() as Promise<FbFeedResponse>)
        .then((body) =>
          body.ok && Array.isArray(body.posts) && body.posts.length ? body.posts : this.posts
        )
        .catch(() => this.posts)
    );
  }
}