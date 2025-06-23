import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { Section1Component } from './section1/section1.component';
import { HoverCarruselComponent } from './hover-carrusel/hover-carrusel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css', // Ensure you have styles defined if needed
  standalone: true,
  imports: [
    NavComponent,
    Section1Component,
    HoverCarruselComponent// This is correctly imported for @defer to work
  ]
})
export class AppComponent {
  title = 'losSables'; // Good, you have a title
}
