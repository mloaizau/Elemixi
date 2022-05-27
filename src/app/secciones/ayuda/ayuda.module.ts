import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AyudaPage } from './ayuda/ayuda.page';

import { AyudaRoutingModule } from './ayuda-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AyudaPage }]),
    AyudaRoutingModule,
  ],
  declarations: [AyudaPage]
})
export class AyudaModule {}
