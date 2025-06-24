import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'tproducto',
    loadComponent: () => import('./tproducto/tproducto.page').then(m => m.TproductoPage)
  },
  {
    path: 'productos-totales',
    loadComponent: () => import('./productos-totales/productos-totales.page').then(m => m.ProductosTotalesPage)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosPageModule)
  }
];
