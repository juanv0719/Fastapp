import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ProductosService } from '../services/productos.service'; // importa el servicio
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-tproducto-detalle',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tproducto-detalle.page.html',
  styleUrls: ['./tproducto-detalle.page.scss'],
})
export class TproductoDetallePage implements OnInit {
  codigo: string | null = null;
  producto: any;
  cantidad: number = 1;


  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService, // inyecta el servicio
    private carritoService: CarritoService,
    private router: Router
  ) {}

  irACompra() {
    if (this.producto) {
      this.carritoService.addItem(this.producto, this.cantidad);
    }
    this.router.navigate(['/compra']);
  }

  ngOnInit() {
    this.codigo = this.route.snapshot.paramMap.get('codigo');
    if (this.codigo) {
      this.producto = this.productosService.getProductoPorCodigo(this.codigo);
    }
  }

  cambiarCantidad(delta: number) {
    const nueva = this.cantidad + delta;
    if (nueva >= 1 && nueva <= 99) {
      this.cantidad = nueva;
    }
  }
}
