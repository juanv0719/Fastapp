import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tproducto',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
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
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
     {
      nombre: 'Filtro ',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
    {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
     {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
     {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
     {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    },
     {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    }
    /*
    ASI SE PUEDE AÑADIR UN NUEVO PRODUCTO
    ,
     {
      nombre: 'Filtro de Aceite',
      descripcion: 'Filtro para motor',
      precio: 5.00,
      imagen: 'assets/bujia.png'
    }
    */

    
  ];

  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
