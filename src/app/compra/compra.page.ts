// ...el resto del código está en la clase CompraPage más abajo...
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../services/carrito.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideDownUp', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('250ms ease', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('250ms ease', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class CompraPage implements OnInit {
  items: any[] = [];
  total: number = 0;
  isResumenOpen = false;
  mostrarModalCotizacion = false;

  constructor(private carritoService: CarritoService, private router: Router) {}

  private itemsSubscription: any;
  ngOnInit() {
    this.cargarCarrito();
    // Suscribirse SIEMPRE a los cambios del carrito
    if ((this.carritoService as any).itemsChanged && (this.carritoService as any).itemsChanged.subscribe) {
      this.itemsSubscription = (this.carritoService as any).itemsChanged.subscribe(() => {
        this.cargarCarrito();
      });
    }
  }

  ngOnDestroy() {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }

  cargarCarrito() {
    // Forzar nueva referencia para que Angular detecte el cambio SIEMPRE
    this.items = [...this.carritoService.getItems()];
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

  toggleResumen() {
    this.isResumenOpen = !this.isResumenOpen;
  }

  abrirModalCotizacion() {
    this.mostrarModalCotizacion = true;
  }


  cerrarModalCotizacion() {
    this.mostrarModalCotizacion = false;
  }

  continuarComprando() {
    this.mostrarModalCotizacion = false;
    this.router.navigate(['/tproducto']);
  }

  realizarCotizacion() {
    this.mostrarModalCotizacion = false;
    // Generar resumen de productos como texto
    let mensaje = '¡Hola! Quiero cotizar los siguientes productos:%0A';
    this.items.forEach(item => {
      mensaje += `• ${item.producto.titulo || item.producto.nombre} x${item.cantidad} - S/. ${(item.producto.precio * item.cantidad).toFixed(2)}%0A`;
    });
    mensaje += `%0ATotal: S/. ${this.total.toFixed(2)}`;
    const url = `https://wa.me/51959175876?text=${mensaje}`;
    window.open(url, '_blank');
  }
}


