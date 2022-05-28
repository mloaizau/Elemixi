import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumenPage } from './resumen/resumen.component';
import { ResumenRoutingModule } from './resumen-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResumenRoutingModule
  ],
  declarations: [ResumenPage]
})
export class ResumenModule {}
