import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-section.component.html',
  styleUrls: ['./servicios-section.component.css']
})
export class ServiciosSectionComponent {
  servicios = [
    {
      icon: 'bi-heart-pulse',
      bg: 'bg-primary-subtle',
      color: 'text-primary',
      titulo: 'Cardiología',
      descripcion: 'Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología avanzada.'
    },
    {
      icon: 'bi-person-vcard',
      bg: 'bg-success-subtle',
      color: 'text-success',
      titulo: 'Medicina General',
      descripcion: 'Atención médica integral para toda la familia con enfoque preventivo.'
    },
    {
      icon: 'bi-award',
      bg: 'bg-info-subtle',
      color: 'text-info',
      titulo: 'Pediatría',
      descripcion: 'Cuidado especializado para la salud y desarrollo de los más pequeños.'
    },
    {
      icon: 'bi-clock-history',
      bg: 'bg-warning-subtle',
      color: 'text-warning',
      titulo: 'Emergencias 24/7',
      descripcion: 'Atención de urgencias médicas las 24 horas del día, todos los días del año.'
    },
    {
      icon: 'bi-gender-female',
      bg: 'bg-danger-subtle',
      color: 'text-danger',
      titulo: 'Ginecología',
      descripcion: 'Atención especializada en salud femenina y cuidados obstétricos.'
    },
    {
      icon: 'bi-beaker',
      bg: 'bg-secondary-subtle',
      color: 'text-secondary',
      titulo: 'Laboratorio',
      descripcion: 'Análisis clínicos completos con resultados rápidos y precisos.'
    }
  ];
}
