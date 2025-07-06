import { Component } from '@angular/core';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage {
  producto: any;                // Objeto que contiene los datos del producto
  private _cantidad = 1;        // Cantidad seleccionada (privada)

  constructor(
    private navCtrl: NavController,      // Controlador de navegación de Ionic
    private toastCtrl: ToastController,  // Controlador para mostrar mensajes tipo toast
    private router: Router               // Router de Angular para navegación
  ) {
    // Obtiene el producto pasado por navegación (si existe)
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.['producto'];

    // Si no hay producto, redirige a la lista de productos totales
    if (!this.producto) {
      this.router.navigate(['/productos-totales']);
    }
  }

  // Getter para la cantidad seleccionada
  get cantidad(): number {
    return this._cantidad;
  }

  // Setter para la cantidad, asegurando que esté entre 1 y 99
  set cantidad(value: number) {
    this._cantidad = Math.max(1, Math.min(value, 99));
  }

  // Calcula el precio total según la cantidad seleccionada
  get precioTotal(): number {
    return this.producto?.precio * this.cantidad;
  }

  // Aumenta la cantidad (máximo 99) y muestra un mensaje
  aumentarCantidad(): void {
    if (this.cantidad < 99) {
      this.cantidad++;
      this.mostrarToast('Cantidad aumentada');
    } else {
      this.mostrarToast('Ya alcanzaste el máximo permitido');
    }
  }

  // Disminuye la cantidad (mínimo 1) y muestra un mensaje
  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
      this.mostrarToast('Cantidad disminuida');
    } else {
      this.mostrarToast('La cantidad mínima es 1');
    }
  }

  // Navega de regreso a la página de productos totales
  goBack(): void {
    this.navCtrl.navigateBack('/productos-totales');
  }

  // Muestra un mensaje tipo toast en la parte inferior de la pantalla
  async mostrarToast(mensaje: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }
}
