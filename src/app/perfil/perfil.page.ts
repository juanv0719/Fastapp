import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';


import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class PerfilPage implements OnInit {
  ruc: string = '';
  razonSocial: string = '';
  correo: string = '';
  telefono: string = '';
  isEditing: boolean = false;
  showSuccess: boolean = false;
  private db: any;
  private userDocId: string = '';

  ngOnInit() {
    // Inicializar Firebase y Firestore
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);
    // Obtener RUC del usuario desde localStorage
    const ruc = localStorage.getItem('ruc');
    if (ruc) {
      this.ruc = ruc;
      this.fetchUserData();
    }
  }

  async fetchUserData() {
    // Buscar usuario por RUC
    const usuariosRef = collection(this.db, 'Usuarios');
    const q = query(usuariosRef, where('RUC', '==', this.ruc));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnap = querySnapshot.docs[0];
      const data = docSnap.data();
      this.userDocId = docSnap.id;
      // Mostrar todos los datos tal como están en la base de datos
      this.razonSocial = data['RazonSocial'] ?? '';
      this.correo = data['Correo'] ?? '';
      this.telefono = data['NumeroTel'] ?? '';
      this.ruc = data['RUC'] ?? '';
      // Log para depuración
      console.log('Datos de usuario Firestore:', data);
    }
  }

  onEdit() {
    this.isEditing = true;
  }

  async onSave() {
    if (!this.userDocId) return;
    // Actualizar Firestore
    const userRef = doc(this.db, 'Usuarios', this.userDocId);
    await updateDoc(userRef, {
      Correo: this.correo,
      NumeroTel: this.telefono,
    });
    this.isEditing = false;
    // Refrescar datos (opcional)
    await this.fetchUserData();
    // Mostrar mensaje de éxito
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2200);
  }

  onCorreoChange(event: any) {
    this.correo = event.target.value;
  }
  onTelefonoChange(event: any) {
    this.telefono = event.target.value;
  }
}
