import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage {
  // Precio unitario del producto
  precio: number = 11.80;

  // Cantidad seleccionada por el usuario
  cantidad: number = 1;

  // Propiedad calculada: precio total (se actualiza dinámicamente)
  get precioTotal(): number {
    return this.precio * this.cantidad;
  }

  // Método para incrementar la cantidad
  aumentarCantidad(): void {
    if (this.cantidad < 99) {
      this.cantidad++;
    }
  }

  // Método para disminuir la cantidad
  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}
