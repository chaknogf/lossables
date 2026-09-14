import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

interface AboutFeature {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  readonly features: AboutFeature[] = [
    { icon: 'bi bi-people-fill', title: 'Equipo Experto', desc: 'Especialistas certificados en cada área.' },
    { icon: 'bi bi-cpu-fill', title: 'Tecnología Moderna', desc: 'Equipos de diagnóstico avanzados.' },
    { icon: 'bi bi-shield-lock-fill', title: 'Atención Segura', desc: 'Protocolos de higiene y confianza.' },
    { icon: 'bi bi-clock-fill', title: 'Emergencias 24/7', desc: 'Atención ininterrumpida al paciente.' }
  ];
}