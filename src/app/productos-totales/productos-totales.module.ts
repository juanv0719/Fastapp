import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosTotalesPageRoutingModule } from './productos-totales-routing.module';

import { ProductosTotalesPage } from './productos-totales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosTotalesPageRoutingModule
  ],
  
})
export class ProductosTotalesPageModule {}
