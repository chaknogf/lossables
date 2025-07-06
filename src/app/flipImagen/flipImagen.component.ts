import { locationIcon } from './../shared/icon';
import { Component, OnInit } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-flipImagen',
  templateUrl: './flipImagen.component.html',
  styleUrls: ['./flipImagen.component.css'],
  standalone: true,
  imports: [MapaComponent, CommonModule]
})
export class FlipImagenComponent implements OnInit {

  private sanitizarSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  locationIcon: SafeHtml = locationIcon

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.locationIcon = this.sanitizer.bypassSecurityTrustHtml(locationIcon);
  }

  ngOnInit() {
  }

}
