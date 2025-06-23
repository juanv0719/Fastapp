import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosTotalesPage } from './productos-totales.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosTotalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosTotalesPageRoutingModule {}
