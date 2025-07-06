
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage,
  },
  {
    path: ':codigo',
    component: ProductosPage, // Esto permite acceder como /productos/TGC-02
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}