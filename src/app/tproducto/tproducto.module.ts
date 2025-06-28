import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TproductoPageRoutingModule } from './tproducto-routing.module';

import { TproductoPage } from './tproducto.page';
import { MenuCategoriasComponent } from '../components/menu-categorias/menu-categorias.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TproductoPageRoutingModule
  ],
  declarations: [TproductoPage, MenuCategoriasComponent]
})
export class TproductoPageModule {}
