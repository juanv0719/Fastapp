import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuCategoriasComponent } from '../components/menu-categorias/menu-categorias.component';
import { MenuService } from '../services/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tproducto',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuCategoriasComponent],
  templateUrl: './tproducto.page.html',
  styleUrls: ['./tproducto.page.scss'],
})
export class TproductoPage implements OnInit {
  isMenuOpen = false;
  categorias$!: Observable<{ nombre: string; submenu: string }[]>;

  productos = [
    {
      nombre: 'Bujía',
      descripcion: 'Descripcion de que tipo de bujia',
      precio: 2.50,
      imagen: 'assets/bujia.png'
    },
    {
      nombre: 'Bujía',
      descripcion: 'Descripcion de que tipo de bujia',
      precio: 2.50,
      imagen: 'assets/bujia.png'
    }
    // otros productos...
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.categorias$ = this.menuService.categorias$;
  }

  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
