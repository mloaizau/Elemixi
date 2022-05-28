import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PromocionesPage } from './promociones/promociones.page';

import { PromocionesRoutingModule } from './promociones-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PromocionesRoutingModule
  ],
  declarations: [PromocionesPage]
})
export class PromocionesModule {}
