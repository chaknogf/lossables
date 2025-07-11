import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctors-section.component.html',
  styleUrls: ['./doctors-section.component.css']
})
export class DoctorsSectionComponent {
  doctors = [
    {
      nombre: 'Dr. María González',
      especialidad: 'Cardióloga',
      descripcion: 'Especialista en cardiología con 12 años de experiencia en diagnóstico y tratamiento cardiovascular.',
      color: 'primary',
      imagen: 'assets/med1.avif',
      perfil: '#'
    },
    {
      nombre: 'Dr. Carlos Rodríguez',
      especialidad: 'Medicina General',
      descripcion: 'Médico general con enfoque en medicina preventiva y atención familiar integral.',
      color: 'success',
      imagen: 'assets/med2.avif',
      perfil: '#'
    },
    {
      nombre: 'Dra. Ana Martínez',
      especialidad: 'Pediatra',
      descripcion: 'Especialista en pediatría con experiencia en cuidado infantil y desarrollo pediátrico.',
      color: 'info',
      imagen: 'assets/med4.avif',
      perfil: '#'
    }
  ];
}
