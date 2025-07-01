import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isMenuOpen = false;
  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // El modo oscuro global se gestiona en app.component.ts
    this.setStatusBar();
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    // El modo oscuro global se gestiona en app.component.ts
  }

  async setStatusBar() {
    try {
      await StatusBar.setStyle({ style: Style.Light }); // Texto oscuro
      await StatusBar.setBackgroundColor({ color: '#ffffff' }); // Fondo blanco
    } catch (e) {
      // Puede fallar en web, ignora el error
    }
  }

  logout() {
    // Limpia aquí cualquier dato de sesión si es necesario
    localStorage.clear(); // o lo que uses para guardar sesión
    this.router.navigate(['/login']);
  }
}