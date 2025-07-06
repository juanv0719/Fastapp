import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    { titulo: 'Switch con luz 12V 35A (verde)', codigo: 'SIWL03', precio: 3.98, imagen: 'assets/switchluzV.jpeg', categoria: 'tapas' },
    { titulo: 'Claxon tono alto tipo disco 12V SEGER', codigo: 'CLXP-0001', precio: 27.5, imagen: 'assets/claxonseger.jpeg' },
    { titulo: 'Medidor de aire metálico hasta 120 PSI', codigo: 'MDAI-01', precio: 14.45, imagen: 'assets/medidoraire.jpeg' },
    // ...PEGA AQUÍ TODOS TUS PRODUCTOS...
    { titulo: 'Tapa de gasolina con rosca sin llave', codigo: 'TGC-03', precio: 9.3, imagen: 'assets/tapagasolinaR-sinllave.jpeg', categoria: 'tapas'},
    { titulo: 'Tapa de gasolina con rosca y llave', codigo: 'TGC-02', precio: 11.8, imagen: 'assets/tapagasolinaR-conllave.jpeg', categoria: 'tapas'},
    // ...continúa con todos los productos...
  ];

  getProductos() {
    return this.productos;
  }

  getProductoPorCodigo(codigo: string) {
    return this.productos.find(p => p.codigo === codigo);
  }
}