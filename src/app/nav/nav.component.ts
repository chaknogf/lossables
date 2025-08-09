import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { logoSVG } from '../shared/logo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class NavComponent implements OnInit, AfterViewInit {
  logoicon: SafeHtml = logoSVG;
  link = 'centromedicolossables@gmail.com';
  isMenuOpen = false;

  form = { nombre: '', telefono: '', especialidad: '' };
  private modalInstance: any;

  constructor(private sanitizer: DomSanitizer, private ngZone: NgZone) {
    this.logoicon = this.sanitizer.bypassSecurityTrustHtml(logoSVG);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const modalEl = document.getElementById('modalCita');
    if (modalEl) {
      this.modalInstance = new bootstrap.Modal(modalEl);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  abrirModal(): void {
    this.modalInstance.show();
  }

  enviarWhatsapp(): void {
    const numeroWhatsapp = '50234826151';
    const mensaje = `Hola, mi nombre es ${this.form.nombre}. Quiero agendar una cita para la especialidad de ${this.form.especialidad}. Mi teléfono es ${this.form.telefono}.`;

    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

    this.ngZone.runOutsideAngular(() => {
      window.open(urlWhatsapp, '_blank');
    });

    this.modalInstance.hide();
    this.form = { nombre: '', telefono: '', especialidad: '' };
  }
}
