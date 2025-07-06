import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TproductoDetallePageRoutingModule } from './tproducto-detalle-routing.module';

import { TproductoDetallePage } from './tproducto-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TproductoDetallePageRoutingModule
  ],
  declarations: [TproductoDetallePage]
})
export class TproductoDetallePageModule {}
