import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
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

  generarPDF(): void {
    const doc = new jsPDF();
    const imgPath = 'assets/repuestojorzaba.png';
    // Encabezado
    doc.setFontSize(20);
    doc.setTextColor('#e50012');
    doc.text('Resumen de Cotización', 105, 22, { align: 'center' });
    // Logo
    const img = new Image();
    img.src = imgPath;
    img.onload = () => {
      doc.addImage(img, 'PNG', 15, 10, 18, 18);
      this._generarPDFTabla(doc);
    };
    img.onerror = () => {
      this._generarPDFTabla(doc);
    };
  }

  private _generarPDFTabla(doc: jsPDF): void {
    let y = 40;
    doc.setFontSize(12);
    doc.setTextColor('#222');
    doc.text('Producto', 20, y);
    doc.text('Cantidad', 100, y);
    doc.text('Subtotal', 160, y);
    y += 8;
    doc.setLineWidth(0.5);
    doc.line(15, y, 195, y);
    y += 8;
    (this.items || []).forEach((item: any) => {
      doc.text(String(item.producto.titulo || item.producto.nombre), 20, y);
      doc.text(String(item.cantidad), 110, y, { align: 'right' });
      doc.text('S/. ' + (item.producto.precio * item.cantidad).toFixed(2), 180, y, { align: 'right' });
      y += 8;
    });
    y += 4;
    doc.setLineWidth(0.3);
    doc.line(15, y, 195, y);
    y += 10;
    doc.setFontSize(14);
    doc.setTextColor('#e50012');
    doc.text('Total: S/. ' + (this.total ? this.total.toFixed(2) : '0.00'), 180, y, { align: 'right' });
    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor('#888');
    doc.text('Gracias por su preferencia.', 105, 285, { align: 'center' });
    doc.save('cotizacion.pdf');
  }

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


