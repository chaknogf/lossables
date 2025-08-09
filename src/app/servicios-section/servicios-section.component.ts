import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@iconify/iconify';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { anestesiaIcon, brainIcon, brillosIcon, cirujanoIcon, curitasIcon, dermaIcon, diabetesIcon, dienteicon, labIcon, medicalIcon, ositoTeddyIcon, psicoIcon, pulmonIcon, reumaIcon, vaginaIcon, maxiloicon } from '../shared/icon';

interface Servicio {
  icon: SafeHtml;
  bg: string;
  color: string;
  titulo: string;
  descripcion: string;
  clase?: string;
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
  diabetes: SafeHtml;
  anestesia: SafeHtml;
  maxilo: SafeHtml;
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
    this.diabetes = this.sanitizer.bypassSecurityTrustHtml(diabetesIcon);
    this.anestesia = this.sanitizer.bypassSecurityTrustHtml(anestesiaIcon);
    this.maxilo = this.sanitizer.bypassSecurityTrustHtml(maxiloicon);
    this.servicios = [
      {
        icon: this.vaginaIcon,
        bg: 'bg-gradient-federal',
        color: '',
        titulo: 'Ginecología y Obstetricia',
        descripcion: 'Cuidado integral para la salud femenina, embarazo y parto.',
        clase: 'gineco'
      },
      {
        icon: this.osito,
        bg: 'bg-info-subtle',
        color: '',
        titulo: 'Pediatría',
        descripcion: 'Atención médica especializada para niños y adolescentes.',
        clase: 'pediatria'
      },
      {
        icon: this.maxilo,
        bg: 'bg-info-subtle',
        color: '',
        titulo: 'Maxilofacial',
        descripcion: 'Soluciones quirúrgicas para problemas dentales, mandibulares y faciales, mejorando funcionalidad, estética y salud oral integral',
        clase: 'pediatria'
      },
      {
        icon: this.medical,
        bg: 'bg-gradient-sky',
        color: '',
        titulo: 'Medicina Interna',
        descripcion: 'Diagnóstico y tratamiento de enfermedades en adultos.'
      },
      {
        icon: this.cirujano,
        bg: 'bg-gradient-cyan',
        color: '',
        titulo: 'Cirugía',
        descripcion: 'Procedimientos quirúrgicos generales con atención especializada.',
        clase: 'cirugia'
      },
      {
        icon: this.curita,
        bg: 'bg-gradient-reverse',
        color: '',
        titulo: 'Cirugía Videolaparoscópica',
        descripcion: 'Cirugías mínimamente invasivas con tecnología avanzada.'
      },
      {
        icon: this.brillo,
        bg: 'bg-gradient-federal',
        color: '',
        titulo: 'Cirugía Plástica',
        descripcion: 'Procedimientos estéticos y reconstructivos profesionales.'
      },
      {
        icon: this.diente,
        bg: 'bg-gradient-cyan',
        color: '',
        titulo: 'Odontología',
        descripcion: 'Salud dental integral para niños y adultos.'
      },
      {
        icon: this.lab,
        bg: 'bg-gradient-soft',
        color: '',
        titulo: 'Laboratorio Clínico',
        descripcion: 'Pruebas diagnósticas rápidas y confiables.'
      },
      {
        icon: this.dermis,
        bg: 'bg-gradient-reverse',
        color: '',
        titulo: 'Dermatología',
        descripcion: 'Diagnóstico y tratamiento de enfermedades de la piel.'
      },
      {
        icon: this.reuma,
        bg: 'bg-gradient-sky',
        color: '',
        titulo: 'Reumatología',
        descripcion: 'Manejo de enfermedades articulares y autoinmunes.'
      },
      {
        icon: this.brain,
        bg: 'bg-gradient-federal',
        color: '',
        titulo: 'Neurología',
        descripcion: 'Diagnóstico y atención de trastornos del sistema nervioso.'
      },
      {
        icon: this.pulmon,
        bg: 'bg-gradient-sky',
        color: '',
        titulo: 'Neumología',
        descripcion: 'Especialistas en enfermedades respiratorias y pulmonares.'
      },
      {
        icon: this.psico,
        bg: 'bg-gradient-soft',
        color: '',
        titulo: 'Psicología',
        descripcion: 'Apoyo emocional y salud mental personalizada.'
      },
      {
        icon: this.diabetes,
        bg: 'bg-gradient-cyan',
        color: '',
        titulo: 'Endocrinología',
        descripcion: 'Diagnóstico y tratamiento de trastornos hormonales como diabetes, tiroides y obesidad.'
      },
      {
        icon: this.anestesia,
        bg: 'bg-gradient-reverse',
        color: '',
        titulo: 'Anestesiología',
        descripcion: 'Especialistas en manejo del dolor y sedación segura durante procedimientos quirúrgicos.'
      }
    ];
  }
}
