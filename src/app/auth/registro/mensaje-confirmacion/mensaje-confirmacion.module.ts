import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MensajeRoutingModule } from './mensaje-confirmacion-routing.module';
import { MensajeConfirmacionComponent } from './mensaje-confirmacion/mensaje-confirmacion.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MensajeConfirmacionComponent }]),
    MensajeRoutingModule,
  ],
  declarations: [MensajeConfirmacionComponent]
})
export class MensajeConfirmacionModule { }
