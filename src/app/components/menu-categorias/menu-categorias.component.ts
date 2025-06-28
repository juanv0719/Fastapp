import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CategoriaMenu = string | { nombre: string; submenu: string };

@Component({
  selector: 'app-menu-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.scss']
})
export class MenuCategoriasComponent {
  @Input() categorias: CategoriaMenu[] = [];
  @Input() isMenuOpen = false;
  @Output() close = new EventEmitter<void>();

  expandedItems: { [key: string]: boolean } = {};

  closeMenu() {
    this.close.emit();
  }

  toggleItem(cat: string | { nombre: string; submenu: string }) {
    const key = typeof cat === 'string' ? cat : cat.nombre;
    this.expandedItems[key] = !this.expandedItems[key];
  }

  getNombre(cat: CategoriaMenu): string {
    return typeof cat === 'string' ? cat : cat.nombre;
  }

  getSubmenu(cat: CategoriaMenu): string {
    return typeof cat === 'string' ? '' : cat.submenu;
  }
}
