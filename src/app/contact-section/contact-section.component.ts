import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    especialidad: '',
    mensaje: ''
  };

  especialidades = [
    { value: '', label: 'Seleccionar especialidad' },
    { value: 'cardiologia', label: 'Cardiología' },
    { value: 'medicina-general', label: 'Medicina General' },
    { value: 'pediatria', label: 'Pediatría' },
    { value: 'ginecologia', label: 'Ginecología' },
    { value: 'emergencias', label: 'Emergencias' }
  ];

  enviarFormulario() {
    console.log('Datos del formulario:', this.formData);
    // Aquí podrías integrar un servicio para enviar a tu backend
  }
}
