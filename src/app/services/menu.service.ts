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
    submenu: ['Tapa de gasolina', 'Chapa de encendido'],
    icon: 'fa-gas-pump',
  },
  {
    nombre: 'Bornes',
    submenu: ['Borne para Tico', 'Borne tipo mariposa'],
    icon: 'fa-car-battery',
  },
  {
    nombre: 'Claxon',
    submenu: ['Claxon'],
    icon: 'fa-bullhorn',
  },
  {
    nombre: 'Resistencia',
    submenu: ['Fusible', 'Portafusible'],
    icon: 'fa-bolt',
  },
  {
    nombre: 'Medidor',
    submenu: ['Medidor', 'Sirena', 'Claxon', 'Laina'],
    icon: 'fa-tachometer-alt',
  },
  {
    nombre: 'Conectores',
    submenu: ['Conectores', 'Conectores de cable', 'Conectores de batería'],
    icon: 'fa-plug',
  },
  {
    nombre: 'Sokete',
    submenu: ['Soquet', 'Switch', 'Foco', 'Conectores', 'Seguros'],
    icon: 'fa-lightbulb',
  },
  {
    nombre: 'Chupone',
    submenu: ['Chanchito', 'Chapa', 'Bocina'],
    icon: 'fa-volume-up',
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
