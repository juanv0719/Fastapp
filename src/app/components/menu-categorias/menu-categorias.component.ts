import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaMenu } from '../../services/menu.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  goToHome() {
    this.closeMenu();
    this.router.navigateByUrl('/home');
  }

  closeMenu() {
    this.close.emit();
  }

  toggleItem(cat: CategoriaMenu) {
    const key = cat.nombre;
    this.expandedItems[key] = !this.expandedItems[key];
  }

  logout() {
    this.closeMenu();
    this.router.navigateByUrl('/login');
  }
}
