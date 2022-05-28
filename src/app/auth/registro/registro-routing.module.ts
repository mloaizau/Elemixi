import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroComponent,
  },
  {
    path: 'mensaje-confirmacion',
    loadChildren: () => import('./mensaje-confirmacion/mensaje-confirmacion.module').then(m => m.MensajeConfirmacionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule {}
