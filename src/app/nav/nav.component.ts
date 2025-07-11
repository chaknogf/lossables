import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { logoicon } from '../shared/icon';
import { CommonModule } from '@angular/common';
import { logoSVG } from '../shared/logo';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class NavComponent implements OnInit {
  logoicon: SafeHtml = logoSVG
  link: string = 'contacto@cmsables.com';
  isMenuOpen = false;

  constructor(private sanitizer: DomSanitizer) {
    this.logoicon = this.sanitizer.bypassSecurityTrustHtml(logoSVG);
  }

  ngOnInit(): void { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
