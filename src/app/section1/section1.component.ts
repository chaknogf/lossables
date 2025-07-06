//import { monitorHeartbeat } from './../shared/icon';
import { Component } from '@angular/core';
import { BeatComponent } from "../beat/beat.component";
import { MapaComponent } from '../mapa/mapa.component';
//import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { SaludoComponent } from '../saludo/saludo.component';
import { FlipImagenComponent } from "../flipImagen/flipImagen.component";


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
  standalone: true,
  imports: [BeatComponent, SaludoComponent]
})
export class Section1Component {



}
