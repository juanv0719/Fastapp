// productos-totales.page.ts
import {
  Component,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos-totales',
  templateUrl: './productos-totales.page.html',
  styleUrls: ['./productos-totales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ProductosTotalesPage implements AfterViewInit {
  @ViewChildren('productCard', { read: ElementRef })
  cards!: QueryList<ElementRef>;


productos = [
    { titulo: 'Switch con luz 12V 35A (verde)', codigo: 'SIWL03', precio: 3.98, imagen: 'assets/switchluzV.jpeg' },
    { titulo: 'Claxon tono alto tipo disco 12V SEGER', codigo: 'CLXP-0001', precio: 27.5, imagen: 'assets/claxonseger.jpeg' },
    { titulo: 'Medidor de aire metálico hasta 120 PSI', codigo: 'MDAI-01', precio: 14.45, imagen: 'assets/medidoraire.jpeg' },
    { titulo: 'Tapa de gasolina cromada 35mm', codigo: 'TGC.01', precio: 20.5, imagen: 'assets/tapacromada.jpeg' },
    { titulo: 'Soquete de lágrima para foco – 158', codigo: 'SKL2C', precio: 1.2, imagen: 'assets/soquetefoco.jpeg' },
    { titulo: 'Filtro gasolina Toyota (Corona, Corolla)', codigo: 'FGU05', precio: 15.55, imagen: 'assets/filtrogasolina-corolla.jpeg' },
    { titulo: 'Switch palanca ON/OFF 6P', codigo: 'SW-I6P', precio: 4.35, imagen: 'assets/switchpalanca.jpeg' },
    { titulo: 'Switch/trompo de aceite Nissan (FEW Japonés)', codigo: 'SAFEW01', precio: 12.9, imagen: 'assets/switchtrompo-nissan.jpeg' },
    { titulo: 'Switch con luz OFF 12V 3 pines 4 clips rojo', codigo: 'SIWL06', precio: 0.75, imagen: 'assets/switchluzR.jpeg' },
    { titulo: 'Chanchito arrancador 12V', codigo: 'SRL13', precio: 22.8, imagen: 'assets/chanchitoarrancador.jpeg' },
    { titulo: 'Relay electrónico', codigo: 'RE15', precio: 22.7, imagen: 'assets/relayelectronico.jpeg' },
    { titulo: 'Switch levanta luna tipo flecha', codigo: 'SLL01', precio: 6.5, imagen: 'assets/switchlevantaluna.jpeg' },
    { titulo: 'Tapa de gasolina con rosca sin llave', codigo: 'TGC-03', precio: 9.3, imagen: 'assets/tapagasolinaR-sinllave.jpeg' },
    { titulo: 'Encendedor universal 12V completo', codigo: 'EDC04', precio: 9.9, imagen: 'assets/encendedoruniversal.jpeg' },
    { titulo: 'Sirena retroceso 12V “bebé”', codigo: 'SRNR12V01', precio: 14.7, imagen: 'assets/sirenaretroceso-BB.jpeg' },
    { titulo: 'Porta fusible de uña rojo y negro (x10 und)', codigo: 'PFUÑA01', precio: 2.15, imagen: 'assets/portafusibleRyN.png' },
    { titulo: 'Switch con luz 12V 35A (amarillo)', codigo: 'SIWL01', precio: 3.98, imagen: 'assets/switchluzA.jpeg' },
    { titulo: 'Tapa de gasolina con rosca y llave', codigo: 'TGC-02', precio: 11.8, imagen: 'assets/tapagasolinaR-conllave.jpeg' },
    { titulo: 'Medidor de aire 120 PSI diagonal', codigo: 'MDA4I', precio: 26.9, imagen: 'assets/medidoraireD.png' },
    { titulo: 'Filtro metal Nissan', codigo: 'FUG04', precio: 7.56, imagen: 'assets/filtrometal-Nissan.jpeg' },
    { titulo: 'Tenaza mediana POS/NEG', codigo: 'TN2', precio: 2.91, imagen: 'assets/tenazamedianaPOS-NEG.jpeg' },
    { titulo: 'Socket de faro H4 (Taiwán)', codigo: 'SKF H4', precio: 3.69, imagen: 'assets/socketfaro-T.jpeg' },
    { titulo: 'Relay tablero 5P 24V con doble resistencia', codigo: 'RDT5P24', precio: 5.2, imagen: 'assets/relaytablero2R.jpeg' },
    { titulo: 'Conectores hembra/macho 4P (par)', codigo: 'CM-H4PCN', precio: 3.2, imagen: 'assets/conectorHM.jpeg' },
    { titulo: 'Conectores hembra/macho 6P (par)', codigo: 'CM-H 6PCN', precio: 4.8, imagen: 'assets/conectorHM-6p.jpeg' },
    { titulo: 'Relay tablero 5P 12V con doble resistencia', codigo: 'RDT5P12', precio: 5.2, imagen: 'assets/relaytablero5P-2R.jpeg' },
    { titulo: 'Claxon de platillo 12V SAFARI', codigo: 'CLXP-12V', precio: 15.25, imagen: 'assets/claxonplatillo-S.jpeg' },
    { titulo: 'Switch con luz 12V 35A (rojo)', codigo: 'SIWL02', precio: 3.98, imagen: 'assets/switchluzA-35A.jpeg' },
    { titulo: 'Chapa de encendido 12V S/M', codigo: 'YW1103-M', precio: 12.5, imagen: 'assets/chapaencendidoS-M.jpeg' },
    { titulo: 'Switch con luz 12V 35A (azul)', codigo: 'SIWL04', precio: 3.98, imagen: 'assets/switchluzAzul-35A.jpeg' },
    { titulo: 'Medidor de aire 50 PSI lateral metálico', codigo: 'MDAI-03', precio: 20.8, imagen: 'assets/medidoraire50PSI.jpeg' },
    { titulo: 'Switch/trompo de aceite universal (FEW Japonés)', codigo: 'SAFEW02', precio: 13.7, imagen: 'assets/switch-trompoaceiteU.jpeg' },
    { titulo: 'Tenaza chica POST/NEG', codigo: 'TN1', precio: 1.6, imagen: 'assets/tenazachica.jpeg' },
    { titulo: 'Soquete relay electrónico sin nombre', codigo: 'SKE SN', precio: 2.3, imagen: 'assets/soqueterelay.jpeg' },
    { titulo: 'Switch palanca ON/OFF 2P', codigo: 'SW-12P', precio: 3.5, imagen: 'assets/switchpalanca2P.jpeg' },
    { titulo: 'Claxon de platillo 24V', codigo: 'CLXP-24V', precio: 16.3, imagen: 'assets/claxonplatillo24V.jpeg' },
    { titulo: 'Back-up alarm 12V/24V', codigo: 'CLXRM-0003', precio: 34, imagen: 'assets/back-upAlarm.jpeg' },
    { titulo: 'Medidor de aire metálico hasta 50 PSI', codigo: 'MDAI-02', precio: 11, imagen: 'assets/medidoraireH50PSI.jpeg' },
    { titulo: 'Tenaza grande', codigo: 'TN3', precio: 4.55, imagen: 'assets/tenazagrande.jpeg' },
    { titulo: 'Conectores hembra/macho 3P (par)', codigo: 'CM-H 3 PCN', precio: 2.7, imagen: 'assets/conectoresH-M3P.jpeg' },
    { titulo: 'Filtro universal gasolina', codigo: 'FGU02', precio: 3.5, imagen: 'assets/filtrogasolinaU.jpeg' },
    { titulo: 'Switch palanca ON/OFF 3P', codigo: 'SW-12P', precio: 3.6, imagen: 'assets/switchpalanca3P.jpeg' },
    { titulo: 'Chapa de encendido universal 12V (metal)', codigo: 'YW1102-M', precio: 21.5, imagen: 'assets/chapaencendidoU.jpeg' },
    { titulo: 'Socket de relay cerámico', codigo: 'SKRCCN', precio: 2.75, imagen: 'assets/socketrelay.png' },
    { titulo: 'Resistencia de bobina', codigo: 'RDB09', precio: 6.95, imagen: 'assets/resistenciabobina.jpeg' },
    { titulo: 'Chapa de encendido universal 24V (metal)', codigo: 'YW1102-M', precio: 21.95, imagen: 'assets/chapaencendidoU24V.jpeg' },
    { titulo: 'Sirena retroceso 24V “bebé”', codigo: 'SRNR24V02', precio: 14.7, imagen: 'assets/sirenaretroceso24V-BB.jpeg' },
    { titulo: 'Flasher para Tico 12V 3 pin', codigo: 'FSH 3PIN', precio: 9.3, imagen: 'assets/flasher-Tico.jpeg' },
    { titulo: 'Switch palanca ON/OFF 6P', codigo: 'SW-I6P', precio: 4.35, imagen: 'assets/switchpalanca6P.jpeg' },
    { titulo: 'Conectores hembra/macho 2P (par)', codigo: 'CM-H 2PCN', precio: 2.2, imagen: 'assets/conectoresH-M2P.jpeg' }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    this.cards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}