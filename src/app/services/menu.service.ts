// Menu de los servicios de categorias del menu de productos

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CategoriaMenu {
  nombre: string;
  submenu: string[];
  icon?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private categoriasSubject = new BehaviorSubject<CategoriaMenu[]>([
    {
      nombre: 'Tapas y Chapas',
      submenu: [
        'Tapa de gasolina',
        'Chapa de encendido ',
      ],
      icon: 'fa-gas-pump',
    },
    {
      nombre: 'Electricos',
      submenu: ['Alternador 12V', 'Regulador de voltaje', 'Bobina de encendido'],
      icon: 'fa-bolt',
    },
    {
      nombre: 'Claxon/Sirenas',
      submenu: ['Claxon simple', 'Sirena doble tono'],
      icon: 'fa-bell',
    },
    {
      nombre: 'Componentes Elec.',
      submenu: ['Fusibles', 'Relés', 'Portafusibles'],
      icon: 'fa-microchip',
    },
    {
      nombre: 'Arrancadores y En.',
      submenu: ['Arrancador 24V', 'Solenoide de arranque'],
      icon: 'fa-car-battery',
    },
    {
      nombre: 'Switches y Paneles',
      submenu: ['Switch de luces', 'Panel de control'],
      icon: 'fa-toggle-on',
    },
    {
      nombre: 'Medidores de aire',
      submenu: ['Medidor digital', 'Sensor de flujo'],
      icon: 'fa-tachometer-alt',
    },
    {
      nombre: 'Tenazas y Bornes',
      submenu: ['Tenaza universal', 'Borne positivo', 'Borne negativo'],
      icon: 'fa-tools',
    },
    {
      nombre: 'Otros productos',
      submenu: ['Producto especial 1', 'Producto especial 2'],
      icon: 'fa-box-open',
    },
  ]);

  public categorias$ = this.categoriasSubject.asObservable();

  getCategorias() {
    return this.categoriasSubject.getValue();
  }

  setCategorias(categorias: CategoriaMenu[]) {
    this.categoriasSubject.next(categorias);
  }
}
