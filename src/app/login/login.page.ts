import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

  standalone: false,
})
export class LoginPage implements OnInit {
  ruc: string = '';
  razonSocial: string = '';
  private db: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);

    // Oculta el splash después de 2.5 segundos
    setTimeout(() => {
      const splash = document.getElementById('splash-intro');
      if (splash) splash.style.display = 'none';
    }, 4500);
  }

  async onLogin() {
    // Clear previous error messages
    const rucError = document.getElementById('ruc-error') as HTMLElement;
    const razonError = document.getElementById('razon-error') as HTMLElement;
    if (rucError) {
      rucError.textContent = '';
      rucError.className = '';
    }
    if (razonError) {
      razonError.textContent = '';
      razonError.className = '';
    }

    let hayError = false;

    if (!this.ruc) {
      if (rucError) {
        rucError.textContent = 'El RUC es obligatorio';
        rucError.className = 'error-text';
      }
      hayError = true;
    }
    if (!this.razonSocial) {
      if (razonError) {
        razonError.textContent = 'La razón social es obligatoria';
        razonError.className = 'error-text';
      }
      hayError = true;
    }

    if (hayError) {
      return;
    }

    try {
      const usuariosRef = collection(this.db, 'Usuarios');
      const q = query(
        usuariosRef,
        where('RUC', '==', this.ruc),
        where('RazonSocial', '==', this.razonSocial)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        this.mostrarBienvenida();
      } else {
        alert('RUC o Razón Social incorrectos');
      }
    } catch (error: any) {
      alert('Error al conectar con la base de datos: ' + error.message);
    }
  }

  mostrarBienvenida() {
    const modal = document.getElementById('modal-bienvenido') as HTMLElement;
    if (!modal) return;
    modal.style.display = 'flex';
    const icono = modal.querySelector('.icono-bienvenido') as HTMLElement;
    if (icono) {
      icono.style.animation = 'none';
      void icono.offsetWidth;
      icono.style.animation = 'scaleIn 0.5s ease-out';
    }
    setTimeout(() => {
      modal.style.display = 'none';
      this.router.navigateByUrl('/home');
    }, 1800);
  }
}
