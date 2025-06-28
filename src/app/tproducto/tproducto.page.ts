import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuCategoriasComponent } from '../components/menu-categorias/menu-categorias.component';

@Component({
  selector: 'app-tproducto',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuCategoriasComponent],
  templateUrl: './tproducto.page.html',
  styleUrls: ['./tproducto.page.scss'],
})
export class TproductoPage {
  isMenuOpen = false;

  categorias = [
    'Tapas y Chapas',
    'Electricos',
    'Claxon/Sirenas',
    'Componentes Elec.',
    'Arrancadores y En.',
    'Switches y Paneles',
    'Medidores de aire',
    'Tenazas y Bornes',
    'Otros productos'
  ];

  productos = [
    {
      nombre: 'Bujía',
      descripcion: 'Descripcion de que tipo de bujia',
      precio: 2.50,
      imagen: 'assets/bujia.png'
    },
    {
      nombre: 'Bujía',
      descripcion: 'Descripcion de que tipo de bujia',
      precio: 2.50,
      imagen: 'assets/bujia.png'
    }
    // otros productos...
  ];

  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
