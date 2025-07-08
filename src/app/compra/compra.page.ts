import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { Platform } from '@ionic/angular';
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

  constructor(private carritoService: CarritoService, private router: Router, private platform: Platform) {}

  async generarPDF() {
    try {
      // 1. Cargar imagen como base64
      const imgUrl = 'assets/repuestojorzaba.png';
      const imgBase64 = await this.getBase64ImageFromAssets(imgUrl);

      // 2. Crear PDF con diseño profesional
      const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
      const pageWidth = doc.internal.pageSize.getWidth();
      // Logo
      doc.addImage(imgBase64, 'PNG', 30, 30, 90, 60);
      // Título
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(32);
      doc.setTextColor('#d50000');
      doc.text('Resumen de Cotización', pageWidth / 2, 60, { align: 'center' });

      // Encabezados de tabla
      doc.setFontSize(16);
      doc.setTextColor('#000');
      doc.setFont('helvetica', 'bold');
      const startY = 120;
      doc.text('Producto', 60, startY);
      doc.text('Cantidad', pageWidth / 2, startY, { align: 'center' });
      doc.text('Subtotal', pageWidth - 100, startY, { align: 'right' });

      // Línea divisoria
      doc.setLineWidth(1);
      doc.line(40, startY + 10, pageWidth - 40, startY + 10);

      // Filas de productos
      doc.setFont('helvetica', 'normal');
      let y = startY + 40;
      this.items.forEach((item: any) => {
        doc.text(item.producto.titulo || item.producto.nombre, 60, y);
        doc.text(String(item.cantidad), pageWidth / 2, y, { align: 'center' });
        doc.text('S/. ' + (item.producto.precio * item.cantidad).toFixed(2), pageWidth - 100, y, { align: 'right' });
        y += 30;
      });

      // Línea final
      doc.setLineWidth(0.5);
      doc.line(40, y + 10, pageWidth - 40, y + 10);

      // Total
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor('#d50000');
      doc.text('Total: S/. ' + this.total.toFixed(2), pageWidth - 100, y + 40, { align: 'right' });

      // 3. Guardar PDF según plataforma
      const pdfOutput = doc.output('arraybuffer');
      const pdfBlob = new Blob([pdfOutput], { type: 'application/pdf' });
      const pdfBase64 = await this.blobToBase64(pdfBlob);

      if (this.platform.is('android') || this.platform.is('capacitor')) {
        // Guardar en Downloads para que sea visible
        const fileName = `cotizacion_${Date.now()}.pdf`;
        await Filesystem.writeFile({
          path: fileName,
          data: pdfBase64,
          directory: Directory.External,
          recursive: true
        });
        // Obtener URI absoluta
        const fileUri = await Filesystem.getUri({
          directory: Directory.External,
          path: fileName,
        });
        // Compartir/abrir PDF con visor externo
        await Share.share({
          title: 'Cotización',
          text: 'Cotización generada',
          url: fileUri.uri,
          dialogTitle: 'Abrir o compartir PDF'
        });
      } else {
        // Web: descarga normal
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdfBlob);
        link.download = 'cotizacion.pdf';
        link.click();
      }
    } catch (err: any) {
      // Mostrar el error como string, sea cual sea el tipo
      alert('Error al generar o guardar el PDF: ' + (err && (err.message || err.toString ? err.toString() : JSON.stringify(err))));
    }
  }

  // Utilidad para convertir imagen a base64
  getBase64ImageFromAssets(imgPath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imgPath;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
    });
  }

  // Utilidad para convertir Blob a base64
  blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
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


