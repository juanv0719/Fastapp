import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isMenuOpen = false;
  isDarkTheme = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Apply saved theme preference on initialization
    this.isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    this.applyTheme();
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

  logout() {
    // Limpia aquí cualquier dato de sesión si es necesario
    localStorage.clear(); // o lo que uses para guardar sesión
    this.router.navigate(['/login']);
  }
}