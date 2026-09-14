import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Stat {
  valor: number;
  sufijo: string;
  etiqueta: string;
  icono: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css']
})
export class StatsSectionComponent implements AfterViewInit {
  stats: Stat[] = [
    { valor: 10, sufijo: '+', etiqueta: 'Años de Experiencia', icono: 'bi-calendar2-check-fill' },
    { valor: 1000, sufijo: '+', etiqueta: 'Pacientes Atendidos', icono: 'bi-people-fill' },
    { valor: 12, sufijo: '+', etiqueta: 'Especialistas', icono: 'bi-person-badge-fill' },
    { valor: 98, sufijo: '%', etiqueta: 'Satisfacción', icono: 'bi-emoji-smile-fill' }
  ];

  @ViewChild('statsGrid', { static: false }) statsGrid!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId) && this.statsGrid) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counterEls = this.statsGrid.nativeElement.querySelectorAll('.stat-counter');
              counterEls.forEach((el: HTMLElement) => {
                const target = parseInt(el.dataset['target'] || '0', 10);
                const suffix = el.dataset['suffix'] || '';
                el.textContent = '0';
                const duration = Math.min(2200, 900 + target * 2);
                this.animateCounter(el, target, suffix, duration);
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      observer.observe(this.statsGrid.nativeElement);
    }
  }

  private animateCounter(el: HTMLElement, target: number, suffix: string, duration: number): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('es-GT') + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }
}