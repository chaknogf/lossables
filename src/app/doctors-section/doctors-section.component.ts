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
      nombre: 'Dra. Robertha Galindo',
      especialidad: 'Ginecologia y Obstetricia',
      descripcion: 'Especialista en ginecología y obstetricia, con una atención cálida y profesional que abarca desde el cuidado preventivo hasta el acompañamiento en procesos complejos. Su enfoque combina ciencia y empatía para brindar a cada mujer una experiencia médica respetuosa, confiable y centrada en su bienestar integral.',
      color: 'primary',
      imagen: 'assets/robertha.avif',
      perfil: '#'
    },
    {
      nombre: 'Dra. Noelia Xiquitá',
      especialidad: 'Ginecologia y Obstetricia',
      descripcion: 'Atención especializada y cercana a la salud integral de la mujer. Con más de 15 años de experiencia, brinda soluciones efectivas en ginecología general, control del embarazo, manejo de la menopausia y cuidado estético íntimo. Su enfoque combina trayectoria clínica con técnicas modernas para acompañar a cada paciente en todas las etapas de su vida con confianza, respeto y profesionalismo.',
      color: 'primary',
      imagen: 'assets/noelia.avif',
      perfil: '#'
    },
    {
      nombre: 'Dra. Andrea Ramirez',
      especialidad: 'Ginecologia y Obstetricia',
      descripcion: 'Especialista en Ginecología y Obstetricia, con sólida formación en salud femenina y amplia experiencia en el abordaje integral de la mujer. Cuenta con conocimientos avanzados en ginecología estética, funcional y regenerativa, lo que le permite brindar atención personalizada en todas las etapas de la vida ginecológica.',
      color: 'success',
      imagen: 'assets/andrea.avif',
      perfil: '#'
    },
    {
      nombre: 'Dra. Victoria Xiquitá',
      especialidad: 'Anestesiología',
      descripcion: 'Especializa en la administración de anestesia, con experiencia en el manejo integral del dolor y en la atención médica perioperatoria. Su labor se enfoca en brindar seguridad, confort y cuidado personalizado antes, durante y después de cada procedimiento.',
      color: 'info',
      imagen: 'assets/victoria.avif',
      perfil: '#'
    },
    {
      nombre: 'Lcda. Cynthia Betancourt',
      especialidad: 'Psicología',
      descripcion: 'Atención psicológica centrada en el bienestar emocional. Su enfoque combina empatía, técnica y acompañamiento profesional, integrando herramientas de la terapia cognitivo-conductual para guiar procesos de cambio con claridad y compromiso.',
      color: 'info',
      imagen: 'assets/cynthia.avif',
      perfil: '#'
    },
    {
      nombre: 'Dra. Fernanda Lainfiesta',
      especialidad: 'Pediatría',
      descripcion: 'Pediatra dedicada al cuidado integral de la salud infantil. Su atención se caracteriza por la calidez, el seguimiento cercano y el compromiso con el desarrollo físico y emocional de niñas y niños en cada etapa de crecimiento.',
      color: 'info',
      imagen: 'assets/fernanda.avif',
      perfil: '#'
    }
  ];
}
