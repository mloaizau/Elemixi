import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';

const routes: Routes = [
  {
    path: '',
    component: MensajeConfirmacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule {}
