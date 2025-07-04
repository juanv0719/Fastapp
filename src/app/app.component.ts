import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AppComponent {
  isMenuOpen = false;
  isDarkTheme = false;
  showMenu = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      // Mostrar menú solo en home y perfil el modo oscuro
      this.showMenu = currentUrl.startsWith('/home') || currentUrl.startsWith('/perfil');
      if (!this.showMenu) {
        this.isMenuOpen = false;
      }
      // Modo oscuro global: solo quitar en login, register y mensajes
      if (
        currentUrl.startsWith('/login') ||
        currentUrl.startsWith('/register') ||
        currentUrl.includes('modal') ||
        currentUrl.includes('mensaje')
      ) {
        document.body.classList.remove('dark-theme');
      } else {
        const isDark = localStorage.getItem('darkTheme') === 'true';
        document.body.classList.toggle('dark-theme', isDark);
      }
    });
  }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    this.applyTheme();
    this.setStatusBar();
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('darkTheme', this.isDarkTheme.toString());
  }

  private applyTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }

  async setStatusBar() {
    try {
      await StatusBar.setStyle({ style: Style.Light });
      await StatusBar.setBackgroundColor({ color: '#ffffff' });
    } catch (e) {}
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
// Para navegación entre páginas de mi menu
  goToHome() {
    this.closeMenu();
    this.router.navigateByUrl('/home');
  }
  goToProductos() {
    this.closeMenu();
    this.router.navigateByUrl('/productos');
  }
  goToPerfil() {
    this.closeMenu();
    this.router.navigateByUrl('/perfil');
  }
  goToConfig() {
    this.closeMenu();
    this.router.navigateByUrl('/config');
  }
}
