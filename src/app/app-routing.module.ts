import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'productos-totales',
    loadChildren: () =>
      import('./productos-totales/productos-totales.module').then(
        (m) => m.ProductosTotalesPageModule
      ),
  },
  {
    path: 'productos', // 🔧 corregido 'pruductos' → 'productos'
    loadChildren: () =>
      import('./productos/productos.module').then(
        (m) => m.ProductosPageModule
      ),
  },
  {
    path: 'tproducto',
    loadChildren: () =>
      import('./tproducto/tproducto.module').then(
        (m) => m.TproductoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
