import { Component, OnInit } from '@angular/core';
import { BeatComponent } from "../beat/beat.component";
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  standalone: true,
  imports: [BeatComponent, MapaComponent]
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
