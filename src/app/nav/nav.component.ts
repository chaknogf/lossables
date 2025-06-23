import { logoicon } from './../shared/icon';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true
})
export class NavComponent implements OnInit {


  private sanitizarSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  logoicon: SafeHtml = logoicon;
  link: string = 'contacto@clinicalossables.com';

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.logoicon = this.sanitizer.bypassSecurityTrustHtml(logoicon);
  }

  ngOnInit() {
  }

}
