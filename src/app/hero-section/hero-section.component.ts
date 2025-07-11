import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

// import { BeatComponent } from '../beat/beat.component';
// import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstetocospioComponent } from '../estetocospio/estetocospio.component';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  imports: [CommonModule, EstetocospioComponent]
})
export class HeroSectionComponent {

  @ViewChild('lottieContainer', { static: true }) container!: ElementRef;

  // constructor(private route: ActivatedRoute) { }

}
