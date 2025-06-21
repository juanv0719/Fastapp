import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isMenuOpen = false;
  isDarkTheme = false;

  constructor() {}

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
}