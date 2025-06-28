import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-categorias',
  templateUrl: './menu-categorias.component.html',
  styleUrls: ['./menu-categorias.component.scss']
})
export class MenuCategoriasComponent {
  @Input() categorias: string[] = [];
  @Input() isMenuOpen = false;
  @Output() close = new EventEmitter<void>();

  expandedItems: { [key: string]: boolean } = {};

  closeMenu() {
    this.close.emit();
  }

  toggleItem(cat: string) {
    this.expandedItems[cat] = !this.expandedItems[cat];
  }
}
