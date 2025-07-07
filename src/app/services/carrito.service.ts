import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private items: any[] = [];

  getItems() {
    return this.items;
  }

  addItem(producto: any, cantidad: number = 1) {
    const idx = this.items.findIndex(item => item.producto.codigo === producto.codigo);
    if (idx > -1) {
      this.items[idx].cantidad += cantidad;
      if (this.items[idx].cantidad > 99) this.items[idx].cantidad = 99;
    } else {
      this.items.push({ producto, cantidad });
    }
  }

  updateCantidad(codigo: string, cantidad: number) {
    const idx = this.items.findIndex(item => item.producto.codigo === codigo);
    if (idx > -1) {
      this.items[idx].cantidad = cantidad;
      if (this.items[idx].cantidad < 1) this.items[idx].cantidad = 1;
      if (this.items[idx].cantidad > 99) this.items[idx].cantidad = 99;
    }
  }

  removeItem(codigo: string) {
    this.items = this.items.filter(item => item.producto.codigo !== codigo);
  }

  clear() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }
}
