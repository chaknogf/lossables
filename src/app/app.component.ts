import { Component } from '@angular/core';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { ServiciosSectionComponent } from './servicios-section/servicios-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { DoctorsSectionComponent } from './doctors-section/doctors-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ThemeToggleComponent,
    NavComponent,
    HeroSectionComponent,
    StatsSectionComponent,
    ServiciosSectionComponent,
    AboutSectionComponent,
    DoctorsSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
