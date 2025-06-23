import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hover-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hover-carrusel.component.html',
  styleUrls: ['./hover-carrusel.component.css']
})
export class HoverCarruselComponent {
  imagenes = [
    { src: 'assets/med1.avif', comentario: 'Dra. Sofía Ramírez – Pediatría' },
    { src: 'assets/med2.avif', comentario: 'Dr. Luis Calderón – Medicina Interna' },
    { src: 'assets/med3.avif', comentario: 'Dr. Fernando López – Cirugía General' },
    { src: 'assets/med4.avif', comentario: 'Dra. Paula Méndez – Ginecología' },
    { src: 'assets/med5.avif', comentario: 'Dra. Ana Morales – Medicina Familiar' },
    { src: 'assets/med6.avif', comentario: 'Dr. Javier Soto – Cardiología' }
  ];
}
