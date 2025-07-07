import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../services/carrito.service';


@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  items: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.items = this.carritoService.getItems();
    this.total = this.carritoService.getTotal();
  }

  sumar(item: any) {
    if (item.cantidad < 99) {
      this.carritoService.updateCantidad(item.producto.codigo, item.cantidad + 1);
      this.cargarCarrito();
    }
  }

  restar(item: any) {
    if (item.cantidad > 1) {
      this.carritoService.updateCantidad(item.producto.codigo, item.cantidad - 1);
      this.cargarCarrito();
    }
  }

  eliminar(item: any) {
    this.carritoService.removeItem(item.producto.codigo);
    this.cargarCarrito();
  }
}
