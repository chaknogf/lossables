// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server'; // Este es tu config para el servidor

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
