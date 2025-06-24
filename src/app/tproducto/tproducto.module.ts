import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TproductoPageRoutingModule } from './tproducto-routing.module';

import { TproductoPage } from './tproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TproductoPageRoutingModule
  ],
  declarations: [TproductoPage]
})
export class TproductoPageModule {}
