import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideLottieOptions } from 'ngx-lottie';
import '@iconify/iconify';

bootstrapApplication(AppComponent, {
  providers: [
    // provideClientHydration(),
    // Descomenta si usas rutas:
    // provideRouter(AppRoutes),
    provideLottieOptions({
      player: () => import('lottie-web')
    }),
  ],
});
