import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuCategoriasComponent } from '../components/menu-categorias/menu-categorias.component';
import { MenuService, CategoriaMenu } from '../services/menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tproducto',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuCategoriasComponent],
  templateUrl: './tproducto.page.html',
  styleUrls: ['./tproducto.page.scss'],
})
export class TproductoPage implements OnInit, AfterViewInit {
  isMenuOpen = false;
  categorias$!: Observable<CategoriaMenu[]>;

  productos: any[] = [
    {
      nombre: 'Tapa Gasolina',
      descripcion: 'Tapa con rosca y llave para depósitos estándar.',
      precio: 35.5,
      codigo: 'TGC-02',
      imagen: 'assets/tapagasolinaR-sinllave.jpeg'
    },
    {
      nombre: 'Tapón Radiador',
      descripcion: 'Tapón de alta presión para radiadores modernos.',
      precio: 25.0,
      codigo: 'TPR-03',
      imagen: 'assets/bujia.jpeg'
    },
    {
      nombre: 'Tapa de Aceite',
      descripcion: 'Tapa roscada para depósitos de aceite.',
      precio: 18.5,
      codigo: 'TAC-01',
      imagen: 'assets/bujia.jpeg'
    },
    {
      nombre: 'Filtro de Aire',
      descripcion: 'Filtro estándar para motores de 1.6 a 2.0L.',
      precio: 45.0,
      codigo: 'FDA-08',
      imagen: 'assets/bujia.jpeg'
    }
    // Puedes seguir agregando más productos...
  ];

  searchTerm: string = '';
  productosFiltrados: any[] = [];

  constructor(private menuService: MenuService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.categorias$ = this.menuService.categorias$;
    // Siempre inicializa productosFiltrados con una copia del array original
    this.resetFiltrado();
  }

  resetFiltrado() {
    // Usar JSON.parse/stringify para forzar nueva referencia y evitar bugs de Angular
    this.productosFiltrados = JSON.parse(JSON.stringify(this.productos));
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const cards = document.querySelectorAll('.producto-card');
      cards.forEach((card) => card.classList.add('visible'));
    }, 100);
  }

  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }



  onBuscarProductos(event: any) {
  const value = (event.target.value || '').trim().toLowerCase();
  this.searchTerm = value;

  if (!value) {
    this.resetFiltrado();

    setTimeout(() => {
      const cards = document.querySelectorAll('.producto-card');
      cards.forEach((card) => card.classList.add('visible'));
    }, 100);

    return;
  }

  this.productosFiltrados = this.productos.filter(producto => {
    return (
      producto.nombre.toLowerCase().includes(value) ||
      producto.descripcion.toLowerCase().includes(value) ||
      producto.codigo.toLowerCase().includes(value)
    );
  });

  console.log('Filtrados:', this.productosFiltrados);

  this.cdr.detectChanges();

  setTimeout(() => {
    const cards = document.querySelectorAll('.producto-card');
    cards.forEach((card) => card.classList.add('visible'));
  }, 100);
}


}
