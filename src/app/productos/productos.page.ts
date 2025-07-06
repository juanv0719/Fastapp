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
  producto: any;
  private _cantidad = 1;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.producto = navigation?.extras?.state?.['producto'];

    if (!this.producto) {
      // Si no se recibe el producto, regresa a la lista
      this.router.navigate(['/productos-totales']);
    }
  }

  get cantidad(): number {
    return this._cantidad;
  }

  set cantidad(value: number) {
    this._cantidad = Math.max(1, Math.min(value, 99));
  }

  get precioTotal(): number {
    return this.producto?.precio * this.cantidad;
  }

  aumentarCantidad(): void {
    if (this.cantidad < 99) {
      this.cantidad++;
      this.mostrarToast('Cantidad aumentada');
    } else {
      this.mostrarToast('Ya alcanzaste el máximo permitido');
    }
  }

  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
      this.mostrarToast('Cantidad disminuida');
    } else {
      this.mostrarToast('La cantidad mínima es 1');
    }
  }

  goBack(): void {
    this.navCtrl.navigateBack('/productos-totales');
  }

  async mostrarToast(mensaje: string): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      position: 'bottom'
    });
    await toast.present();
  }
}
