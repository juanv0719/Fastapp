import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class RegisterPage implements OnInit {
  private db: any;

  constructor() {}

  ngOnInit() {
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);

    document
      .getElementById('btnRegister')
      ?.addEventListener('click', async (e) => {
        e.preventDefault();
        this.registerUser();
      });
  }

  async registerUser() {
    const ruc = (
      document.getElementById('rucReg') as HTMLInputElement
    ).value.trim();
    const razon = (
      document.getElementById('razonReg') as HTMLInputElement
    ).value.trim();
    const correo = (
      document.getElementById('emailReg') as HTMLInputElement
    ).value.trim();
    const telefono = (
      document.getElementById('telReg') as HTMLInputElement
    ).value.trim();

    this.clearErrors();

    let hayError = false;

    if (!ruc) {
      this.showError('rucReg', 'Ingrese RUC');
      hayError = true;
    }
    if (!razon) {
      this.showError('razonReg', 'Ingrese razón social');
      hayError = true;
    }
    if (!correo) {
      this.showError('emailReg', 'Ingrese correo');
      hayError = true;
    }
    if (!telefono) {
      this.showError('telReg', 'Ingrese número de teléfono');
      hayError = true;
    }

    if (hayError) {
      return;
    }

    try {
      await addDoc(collection(this.db, 'Usuarios'), {
        RUC: ruc,
        RazonSocial: razon,
        Correo: correo,
        NumeroTel: telefono,
      });
      this.mostrarRegistroExitoso();
      this.clearForm();
    } catch (error: any) {
      alert('Error al registrar: ' + error.message);
    }
  }

  private showError(fieldId: string, message: string) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  private clearErrors() {
    document.getElementById('rucReg-error')!.textContent = '';
    document.getElementById('razonReg-error')!.textContent = '';
    document.getElementById('emailReg-error')!.textContent = '';
    document.getElementById('telReg-error')!.textContent = '';
  }

  private mostrarRegistroExitoso() {
    const modal = document.getElementById('modal-exito');
    if (!modal) return;
    modal.style.display = 'flex';
    const circle = modal.querySelector('.checkmark-circle');
    const check = modal.querySelector('.checkmark-check');
    if (circle && check) {
      (circle as HTMLElement).style.strokeDashoffset = '166';
      (check as HTMLElement).style.strokeDashoffset = '48';
      void (circle as HTMLElement).offsetWidth;
      void (check as HTMLElement).offsetWidth;
      (circle as HTMLElement).style.animation = 'strokeCircle 0.6s forwards';
      (check as HTMLElement).style.animation = 'strokeCheck 0.4s 0.6s forwards';
    }
    setTimeout(() => {
      modal.style.display = 'none';
    }, 3000);
  }

  private clearForm() {
    (document.getElementById('rucReg') as HTMLInputElement).value = '';
    (document.getElementById('razonReg') as HTMLInputElement).value = '';
    (document.getElementById('emailReg') as HTMLInputElement).value = '';
    (document.getElementById('telReg') as HTMLInputElement).value = '';
  }
}
