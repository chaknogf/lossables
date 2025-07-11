import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@iconify/iconify';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { brainIcon, brillosIcon, cirujanoIcon, curitasIcon, dermaIcon, dienteicon, labIcon, medicalIcon, ositoTeddyIcon, psicoIcon, pulmonIcon, reumaIcon, vaginaIcon } from '../shared/icon';

interface Servicio {
  icon: SafeHtml;
  bg: string;
  color: string;
  titulo: string;
  descripcion: string;
}
@Component({
  selector: 'app-servicios-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-section.component.html',
  styleUrls: ['./servicios-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiciosSectionComponent {

  vaginaIcon: SafeHtml;
  osito: SafeHtml;
  medical: SafeHtml;
  curita: SafeHtml;
  cirujano: SafeHtml;
  brillo: SafeHtml;
  diente: SafeHtml;
  lab: SafeHtml;
  dermis: SafeHtml;
  reuma: SafeHtml;
  brain: SafeHtml;
  pulmon: SafeHtml;
  psico: SafeHtml;
  servicios: Servicio[];

  constructor(private sanitizer: DomSanitizer) {
    this.vaginaIcon = this.sanitizer.bypassSecurityTrustHtml(vaginaIcon);
    this.osito = this.sanitizer.bypassSecurityTrustHtml(ositoTeddyIcon);
    this.medical = this.sanitizer.bypassSecurityTrustHtml(medicalIcon);
    this.curita = this.sanitizer.bypassSecurityTrustHtml(curitasIcon);
    this.cirujano = this.sanitizer.bypassSecurityTrustHtml(cirujanoIcon);
    this.brillo = this.sanitizer.bypassSecurityTrustHtml(brillosIcon);
    this.diente = this.sanitizer.bypassSecurityTrustHtml(dienteicon);
    this.lab = this.sanitizer.bypassSecurityTrustHtml(labIcon);
    this.dermis = this.sanitizer.bypassSecurityTrustHtml(dermaIcon);
    this.reuma = this.sanitizer.bypassSecurityTrustHtml(reumaIcon);
    this.brain = this.sanitizer.bypassSecurityTrustHtml(brainIcon);
    this.pulmon = this.sanitizer.bypassSecurityTrustHtml(pulmonIcon);
    this.psico = this.sanitizer.bypassSecurityTrustHtml(psicoIcon);
    this.servicios = [
      {
        icon: this.vaginaIcon,
        bg: 'bg-danger-subtle',
        color: 'text-danger',
        titulo: 'Ginecología y Obstetricia',
        descripcion: 'Cuidado integral para la salud femenina, embarazo y parto.'
      },
      {
        icon: this.osito,
        bg: 'bg-info-subtle',
        color: 'text-info',
        titulo: 'Pediatría',
        descripcion: 'Atención médica especializada para niños y adolescentes.'
      },
      {
        icon: this.medical,
        bg: 'bg-primary-subtle',
        color: 'text-primary',
        titulo: 'Medicina Interna',
        descripcion: 'Diagnóstico y tratamiento de enfermedades en adultos.'
      },
      {
        icon: this.cirujano,
        bg: 'bg-secondary-subtle',
        color: 'text-success',
        titulo: 'Cirugía',
        descripcion: 'Procedimientos quirúrgicos generales con atención especializada.'
      },
      {
        icon: this.curita,
        bg: 'bg-warning-subtle',
        color: 'text-warning',
        titulo: 'Cirugía Videolaparoscópica',
        descripcion: 'Cirugías mínimamente invasivas con tecnología avanzada.'
      },
      {
        icon: this.brillo,
        bg: 'bg-success-subtle',
        color: 'text-success',
        titulo: 'Cirugía Plástica',
        descripcion: 'Procedimientos estéticos y reconstructivos profesionales.'
      },
      {
        icon: this.diente,
        bg: 'bg-info-subtle',
        color: 'text-info',
        titulo: 'Odontología',
        descripcion: 'Salud dental integral para niños y adultos.'
      },
      {
        icon: this.lab,
        bg: 'bg-danger-subtle',
        color: 'text-danger',
        titulo: 'Laboratorio Clínico',
        descripcion: 'Pruebas diagnósticas rápidas y confiables.'
      },
      {
        icon: this.dermis,
        bg: 'bg-primary-subtle',
        color: 'text-primary',
        titulo: 'Dermatología',
        descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel.'
      },
      {
        icon: this.reuma,
        bg: 'bg-success-subtle',
        color: 'text-success',
        titulo: 'Reumatología',
        descripcion: 'Manejo de enfermedades articulares y autoinmunes.'
      },
      {
        icon: this.brain,
        bg: 'bg-warning-subtle',
        color: 'text-warning',
        titulo: 'Neurología',
        descripcion: 'Diagnóstico y atención de trastornos del sistema nervioso.'
      },
      {
        icon: this.pulmon,
        bg: 'bg-info-subtle',
        color: 'text-info',
        titulo: 'Neumología',
        descripcion: 'Especialistas en enfermedades respiratorias y pulmonares.'
      },
      {
        icon: this.psico,
        bg: 'bg-secondary-subtle',
        color: 'text-secondary',
        titulo: 'Psicología',
        descripcion: 'Apoyo emocional y salud mental personalizada.'
      }
    ];
  }
}
