import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

interface HeroImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  readonly heroImages: HeroImage[] = [
    { src: 'assets/medicos.avif', alt: 'Equipo médico del Centro Médico Los Sables' },
    { src: 'assets/medicos2.avif', alt: 'Doctora del Centro Médico Los Sables' },
    { src: 'assets/medicos3.avif', alt: 'Atención médica integral en Tecpán Guatemala' }
  ];

  activeImage = 0;
  autoPaused = false;

  private autoTimer: ReturnType<typeof setInterval> | null = null;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.autoTimer = setInterval(() => {
        if (!this.autoPaused) {
          this.activeImage = (this.activeImage + 1) % this.heroImages.length;
        }
      }, 5500);
    }
  }

  ngOnDestroy(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
    }
  }

  selectImage(i: number): void {
    this.activeImage = i;
  }
}