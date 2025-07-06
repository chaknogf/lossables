import { Routes, RouterModule } from '@angular/router';
import { ServiciosSectionComponent } from './servicios-section/servicios-section.component';

const routes: Routes = [
  { path: 'servicios', component: ServiciosSectionComponent },
  // otras rutas...
];

export const AppRoutes = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
});
