import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenPage } from './resumen/resumen.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumenRoutingModule {}
