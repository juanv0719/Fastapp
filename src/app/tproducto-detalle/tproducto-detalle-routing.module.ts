import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TproductoDetallePage } from './tproducto-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TproductoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TproductoDetallePageRoutingModule {}
