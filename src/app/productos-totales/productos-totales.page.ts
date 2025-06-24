import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-totales',
  templateUrl: './productos-totales.page.html',
  styleUrls: ['./productos-totales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosTotalesPage {
  productos = [
    {
      titulo: 'Bujía NGK',
      codigo: 'A123456',
      precio: 2.5,
      imagen: 'assets/bujia.jpeg',
      favorito: false
    },
    {
      titulo: 'Filtro de Gas SAFARI',
      codigo: 'B654321',
      precio: 3.5,
      imagen: 'assets/filtro.jpeg',
      favorito: false
    },
    {
      titulo: 'Tapa Gasolina con llave',
      codigo: 'C987654',
      precio: 18.8,
      imagen: 'assets/tapagas.jpeg',
      descuento: true,
      precioOriginal: 25,
      favorito: false
    },
    {
      titulo: 'Switch con luz OFF 12V 3 pines 4 clips rojo',
      codigo: 'D192837',
      precio: 8.9,
      imagen: 'assets/switch.jpeg',
      favorito: false
    },
    {
      titulo: 'Resistencia de bobina',
      codigo: 'E102938',
      precio: 45,
      imagen: 'assets/resistenciaBobina.jpeg',
      descuento: true,
      precioOriginal: 55,
      favorito: false
    }
  ];

  constructor() {
    this.asignarFavoritosAleatorios();
  }

  marcarFavorito(producto: any) {
    producto.favorito = !producto.favorito;
  }

  asignarFavoritosAleatorios() {
    // Número aleatorio de favoritos (entre 1 y el total de productos)
    const cantidadFavoritos = Math.floor(Math.random() * this.productos.length) + 1;

    // Elegir productos aleatorios sin repetir
    const indicesSeleccionados = new Set<number>();
    while (indicesSeleccionados.size < cantidadFavoritos) {
      const index = Math.floor(Math.random() * this.productos.length);
      indicesSeleccionados.add(index);
    }

    // Marcar los productos seleccionados como favoritos
    for (const index of indicesSeleccionados) {
      this.productos[index].favorito = true;
    }
  }
}
