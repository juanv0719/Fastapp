// Eliminar código fuera de la clase y dejar solo la declaración correcta abajo
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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
export class MenuCategoriasComponent implements OnInit {
  isDarkTheme = false;
  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('darkTheme', this.isDarkTheme.toString());
  }

  private applyTheme(): void {
    // Aplica dark-theme-productos solo en rutas /home o /tproducto
    const url = window.location.pathname;
    const body = document.body;
    if (this.isDarkTheme && (url.startsWith('/home') || url.startsWith('/tproducto'))) {
      body.classList.add('dark-theme-productos');
    } else {
      body.classList.remove('dark-theme-productos');
    }
  }
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
