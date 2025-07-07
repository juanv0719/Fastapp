import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private items: any[] = [];
  public itemsChanged = new BehaviorSubject<any[]>(this.items);

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
    this.itemsChanged.next(this.items);
  }

  updateCantidad(codigo: string, cantidad: number) {
    const idx = this.items.findIndex(item => item.producto.codigo === codigo);
    if (idx > -1) {
      this.items[idx].cantidad = cantidad;
      if (this.items[idx].cantidad < 1) this.items[idx].cantidad = 1;
      if (this.items[idx].cantidad > 99) this.items[idx].cantidad = 99;
      this.itemsChanged.next(this.items);
    }
  }

  removeItem(codigo: string) {
    this.items = this.items.filter(item => item.producto.codigo !== codigo);
    this.itemsChanged.next(this.items);
  }

  clear() {
    this.items = [];
    this.itemsChanged.next(this.items);
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }
}
