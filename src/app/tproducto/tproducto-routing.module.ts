import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TproductoPage } from './tproducto.page';

const routes: Routes = [
  {
    path: '',
    component: TproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TproductoPageRoutingModule {}
