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
    // El modo oscuro global se gestiona en app.component.ts
  }


  @Input() categorias: CategoriaMenu[] = [];
  @Input() isMenuOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() categoriaSeleccionada = new EventEmitter<string>();
  @Output() subcategoriaSeleccionada = new EventEmitter<string>();

  seleccionarCategoria(nombre: string) {
    // Normaliza el nombre para que coincida con la propiedad categoria de los productos
    if (nombre.toLowerCase().includes('tapa')) {
      this.categoriaSeleccionada.emit('tapas');
    } else if (nombre.toLowerCase().includes('claxon')) {
      this.categoriaSeleccionada.emit('claxon');
    } else {
      this.categoriaSeleccionada.emit(nombre.toLowerCase());
    }
    this.closeMenu();
  }

  seleccionarSubcategoria(nombre: string) {
    this.subcategoriaSeleccionada.emit(nombre);
    this.closeMenu();
  }

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
