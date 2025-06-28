// Menu de los servicios de categorias del menu de productos

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private categoriasSubject = new BehaviorSubject<{
    nombre: string;
    submenu: string;
  }[]>([
    { nombre: 'Tapas y Chapas', submenu: 'Submenú Tapas y Chapas' },
    { nombre: 'Electricos', submenu: 'eLELddddLLL' },
    { nombre: 'Claxon/Sirenas', submenu: 'Submenú Claxon/Sirenas' },
    { nombre: 'Componentes Elec.', submenu: 'Submenú Componentes Elec.' },
    { nombre: 'Arrancadores y En.', submenu: 'Submenú Arrancadores y En.' },
    { nombre: 'Switches y Paneles', submenu: 'Submenú Switches y Paneles' },
    { nombre: 'Medidores de aire', submenu: 'Submenú Medidores de aire' },
    { nombre: 'Tenazas y Bornes', submenu: 'Submenú Tenazas y Bornes' },
    { nombre: 'Otros productos', submenu: 'Submenú Otros productos' },
  ]);

  public categorias$ = this.categoriasSubject.asObservable();

  getCategorias() {
    return this.categoriasSubject.getValue();
  }

  setCategorias(categorias: { nombre: string; submenu: string }[]) {
    this.categoriasSubject.next(categorias);
  }
}
