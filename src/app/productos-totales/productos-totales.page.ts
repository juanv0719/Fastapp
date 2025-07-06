import { Component, ElementRef, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
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
  // Referencia a todas las tarjetas de producto en la vista
  @ViewChildren('productCard', { read: ElementRef })
  cards!: QueryList<ElementRef>;

  constructor(private router: Router) {}

  // Lista de productos que se muestran en la página
  productos = [
    {
      titulo: 'Switch con luz 12V 35A (verde)',
      codigo: 'SIWL03',
      precio: 3.98,
      imagen: 'assets/switchluzV.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y cobre',
        compatibilidad: 'Sistemas de 12V DC',
        color: 'Verde con negro',
        voltaje: '12V / 35A'
      },
      descripcion: 'Switch iluminado de alta resistencia ideal para controlar dispositivos eléctricos en vehículos y maquinaria.'
    },
    {
      titulo: 'Claxon tono alto tipo disco 12V SEGER',
      codigo: 'CLXP-0001',
      precio: 27.5,
      imagen: 'assets/claxonseger.jpeg',
      fichaTecnica: {
        material: 'Acero inoxidable',
        compatibilidad: 'Vehículos con sistema de 12V',
        color: 'Negro con detalles metálicos',
        voltaje: '12V'
      },
      descripcion: 'Claxon disco SEGER de alta frecuencia para advertencia sonora efectiva en vehículos de todo tipo.'
    },
    {
      titulo: 'Medidor de aire metálico hasta 120 PSI',
      codigo: 'MDAI-01',
      precio: 14.45,
      imagen: 'assets/medidoraire.jpeg',
      fichaTecnica: {
        material: 'Cuerpo metálico cromado',
        compatibilidad: 'Válvulas de neumáticos estándar',
        color: 'Cromado',
        rangoPresion: '0-120 PSI'
      },
      descripcion: 'Manómetro metálico preciso para monitoreo de presión en neumáticos hasta 120 PSI.'
    },
    {
      titulo: 'Tapa de gasolina cromada 35mm',
      codigo: 'TGC.01',
      precio: 20.5,
      imagen: 'assets/tapacromada.jpeg',
      fichaTecnica: {
        material: 'Metal cromado',
        compatibilidad: 'Boquillas de 35 mm',
        color: 'Cromado',
        cierre: 'Rosca'
      },
      descripcion: 'Tapa de gasolina con acabado cromado, ideal para un cierre seguro y estilo automotriz.'
    },
    {
      titulo: 'Soquete de lágrima para foco – 158',
      codigo: 'SKL2C',
      precio: 1.2,
      imagen: 'assets/soquetefoco.jpeg',
      fichaTecnica: {
        material: 'Plástico resistente',
        compatibilidad: 'Focos tipo lágrima 158',
        color: 'Negro',
        voltaje: '12V'
      },
      descripcion: 'Soquete de instalación sencilla para focos pequeños tipo lágrima, usado comúnmente en luces interiores.'
    },
    {
      titulo: 'Filtro gasolina Toyota (Corona, Corolla)',
      codigo: 'FGU05',
      precio: 15.55,
      imagen: 'assets/filtrogasolina-corolla.jpeg',
      fichaTecnica: {
        material: 'Acero y filtro interno de papel',
        compatibilidad: 'Toyota Corona, Corolla',
        color: 'Plateado',
        conexión: 'Entrada/salida de 8mm'
      },
      descripcion: 'Filtro de gasolina que asegura una adecuada limpieza del combustible en vehículos Toyota.'
    },
    {
      titulo: 'Switch palanca ON/OFF 6P',
      codigo: 'SW-I6P',
      precio: 4.35,
      imagen: 'assets/switchpalanca.jpeg',
      fichaTecnica: {
        material: 'Metal y plástico',
        compatibilidad: 'Sistemas eléctricos automotrices',
        color: 'Negro con palanca metálica',
        tipo: '6 pines ON/OFF'
      },
      descripcion: 'Interruptor de palanca de 6 pines ideal para sistemas eléctricos auxiliares de vehículos.'
    },
    {
      titulo: 'Switch/trompo de aceite Nissan (FEW Japonés)',
      codigo: 'SAFEW01',
      precio: 12.9,
      imagen: 'assets/switchtrompo-nissan.jpeg',
      fichaTecnica: {
        material: 'Metal con conector de cobre',
        compatibilidad: 'Motores Nissan',
        color: 'Plateado',
        voltaje: '12V'
      },
      descripcion: 'Sensor de presión de aceite tipo trompo para vehículos Nissan, marca FEW de fabricación japonesa.'
    },
    {
      titulo: 'Switch con luz OFF 12V 3 pines 4 clips rojo',
      codigo: 'SIWL06',
      precio: 0.75,
      imagen: 'assets/switchluzR.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS',
        compatibilidad: 'Circuitos de 12V DC',
        color: 'Rojo',
        pines: '3 pines / 4 clips'
      },
      descripcion: 'Interruptor compacto con luz indicadora roja para proyectos eléctricos o aplicaciones automotrices.'
    },
    {
      titulo: 'Chanchito arrancador 12V',
      codigo: 'SRL13',
      precio: 22.8,
      imagen: 'assets/chanchitoarrancador.jpeg',
      fichaTecnica: {
        material: 'Metal recubierto',
        compatibilidad: 'Sistemas de arranque 12V',
        color: 'Negro con terminales metálicos',
        corriente: 'Alta intensidad'
      },
      descripcion: 'Relay de arranque tipo "chanchito" para encendido de motores en vehículos de 12V.'
    },
    {
      titulo: 'Relay electrónico',
      codigo: 'RE15',
      precio: 22.7,
      imagen: 'assets/relayelectronico.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y cobre',
        compatibilidad: 'Automóviles y maquinaria de 12V',
        color: 'Negro',
        pines: '4 pines estándar'
      },
      descripcion: 'Relay electrónico para control de circuitos automotrices. Ideal para luces, bocinas y sistemas auxiliares.'
    },
    {
      titulo: 'Switch levanta luna tipo flecha',
      codigo: 'SLL01',
      precio: 6.5,
      imagen: 'assets/switchlevantaluna.jpeg',
      fichaTecnica: {
        material: 'Plástico resistente',
        compatibilidad: 'Módulos de elevavidrios eléctricos',
        color: 'Negro',
        función: 'Subida y bajada de lunas eléctricas'
      },
      descripcion: 'Interruptor tipo flecha usado para activar motores de lunas eléctricas en puertas de vehículos.'
    },
    {
      titulo: 'Tapa de gasolina con rosca sin llave',
      codigo: 'TGC-03',
      precio: 9.3,
      imagen: 'assets/tapagasolinaR-sinllave.jpeg',
      fichaTecnica: {
        material: 'Plástico duro y goma',
        compatibilidad: 'Autos con entrada roscada',
        color: 'Negro',
        cierre: 'Rosca, sin llave'
      },
      descripcion: 'Tapa de gasolina universal con diseño roscado que proporciona sellado sin necesidad de llave.'
    },
    {
      titulo: 'Encendedor universal 12V completo',
      codigo: 'EDC04',
      precio: 9.9,
      imagen: 'assets/encendedoruniversal.jpeg',
      fichaTecnica: {
        material: 'Metal y plástico',
        compatibilidad: 'Vehículos con puerto de encendedor 12V',
        color: 'Negro con detalles metálicos',
        voltaje: '12V'
      },
      descripcion: 'Encendedor completo con resistencia interna para uso en autos y como alimentación auxiliar de 12V.'
    },
    {
      titulo: 'Sirena retroceso 12V “bebé”',
      codigo: 'SRNR12V01',
      precio: 14.7,
      imagen: 'assets/sirenaretroceso-BB.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y electrónica interna',
        compatibilidad: 'Sistemas de reversa de 12V',
        color: 'Negro',
        sonido: 'Alerta tipo “bebé llorando”'
      },
      descripcion: 'Sirena de retroceso con sonido infantil, utilizada para advertencia sonora al dar marcha atrás.'
    },
    {
      titulo: 'Porta fusible de uña rojo y negro (x10 und)',
      codigo: 'PFUÑA01',
      precio: 2.15,
      imagen: 'assets/portafusibleRyN.png',
      fichaTecnica: {
        material: 'Plástico y cobre',
        compatibilidad: 'Fusibles tipo uña',
        color: 'Rojo y negro',
        voltaje: '12V'
      },
      descripcion: 'Porta fusible tipo uña ideal para conexiones rápidas, incluye cableado en pares rojo y negro.'
    },
    {
      titulo: 'Switch con luz 12V 35A (amarillo)',
      codigo: 'SIWL01',
      precio: 3.98,
      imagen: 'assets/switchluzA.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS',
        compatibilidad: 'Sistemas eléctricos de 12V',
        color: 'Amarillo con negro',
        voltaje: '12V / 35A'
      },
      descripcion: 'Switch iluminado color amarillo, útil para activar circuitos con visibilidad en ambientes oscuros.'
    },
    {
      titulo: 'Tapa de gasolina con rosca y llave',
      codigo: 'TGC-02',
      precio: 11.8,
      imagen: 'assets/tapagasolinaR-conllave.jpeg',
      fichaTecnica: {
        material: 'Plástico con cierre metálico',
        compatibilidad: 'Bocas de tanque con rosca',
        color: 'Negro',
        seguridad: 'Incluye llave'
      },
      descripcion: 'Tapa de gasolina con sistema de rosca y cierre seguro con llave, evita accesos no autorizados.'
    },
    {
      titulo: 'Medidor de aire 120 PSI diagonal',
      codigo: 'MDA4I',
      precio: 26.9,
      imagen: 'assets/medidoraireD.png',
      fichaTecnica: {
        material: 'Acero cromado',
        compatibilidad: 'Válvulas tipo Schrader',
        color: 'Cromado',
        presiónMáxima: '120 PSI'
      },
      descripcion: 'Manómetro de precisión con lectura en diagonal, permite revisar presión de llantas con facilidad.'
    },
    {
      titulo: 'Filtro metal Nissan',
      codigo: 'FUG04',
      precio: 7.56,
      imagen: 'assets/filtrometal-Nissan.jpeg',
      fichaTecnica: {
        material: 'Cuerpo metálico con malla interna',
        compatibilidad: 'Motores Nissan antiguos',
        color: 'Plateado',
        entrada: 'Rosca estándar'
      },
      descripcion: 'Filtro metálico para línea de combustible, resistente a altas temperaturas y corrosión.'
    },
    {
      titulo: 'Tenaza mediana POS/NEG',
      codigo: 'TN2',
      precio: 2.91,
      imagen: 'assets/tenazamedianaPOS-NEG.jpeg',
      fichaTecnica: {
        material: 'Acero con mango PVC',
        compatibilidad: 'Baterías automotrices',
        color: 'Rojo y negro',
        uso: 'Conexiones positivas y negativas'
      },
      descripcion: 'Tenazas de tamaño mediano con alta conductividad y aislamiento para conexión de bornes de batería.'
    },
    {
      titulo: 'Socket de faro H4 (Taiwán)',
      codigo: 'SKF H4',
      precio: 3.69,
      imagen: 'assets/socketfaro-T.jpeg',
      fichaTecnica: {
        material: 'Cerámica y cobre',
        compatibilidad: 'Focos H4 de autos',
        color: 'Negro con terminales metálicos',
        temperaturaSoportada: 'Alta'
      },
      descripcion: 'Socket de faro cerámico de alta resistencia térmica compatible con focos H4. Fabricación taiwanesa.'
    },
    {
      titulo: 'Relay tablero 5P 24V con doble resistencia',
      codigo: 'RDT5P24',
      precio: 5.2,
      imagen: 'assets/relaytablero2R.jpeg',
      fichaTecnica: {
        material: 'Plástico con pines metálicos',
        compatibilidad: 'Circuitos de 24V',
        color: 'Negro',
        pines: '5 pines, doble resistencia'
      },
      descripcion: 'Relay para tablero con doble resistencia interna, ideal para vehículos pesados y sistemas de 24V.'
    },
    {
      titulo: 'Conectores hembra/macho 4P (par)',
      codigo: 'CM-H4PCN',
      precio: 3.2,
      imagen: 'assets/conectorHM.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y cobre',
        compatibilidad: 'Conexiones de 4 pines',
        color: 'Negro',
        voltaje: '12V – 24V'
      },
      descripcion: 'Par de conectores eléctricos de 4 pines para instalaciones automotrices o electrónicas.'
    },
    {
      titulo: 'Conectores hembra/macho 6P (par)',
      codigo: 'CM-H 6PCN',
      precio: 4.8,
      imagen: 'assets/conectorHM-6p.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS',
        compatibilidad: 'Conexiones de 6 vías',
        color: 'Negro',
        tensión: 'Hasta 24V'
      },
      descripcion: 'Juego de conectores de 6 pines ideales para agrupación de señales o energía en circuitos.'
    },
    {
      titulo: 'Relay tablero 5P 12V con doble resistencia',
      codigo: 'RDT5P12',
      precio: 5.2,
      imagen: 'assets/relaytablero5P-2R.jpeg',
      fichaTecnica: {
        material: 'Plástico reforzado',
        compatibilidad: 'Tableros de 12V',
        color: 'Negro',
        pines: '5 pines'
      },
      descripcion: 'Relay de tablero con doble resistencia para distribuir carga en sistemas de 12V automotrices.'
    },
    {
      titulo: 'Claxon de platillo 12V SAFARI',
      codigo: 'CLXP-12V',
      precio: 15.25,
      imagen: 'assets/claxonplatillo-S.jpeg',
      fichaTecnica: {
        material: 'Acero inoxidable pintado',
        compatibilidad: 'Sistemas de 12V',
        color: 'Negro',
        sonido: 'Tono medio'
      },
      descripcion: 'Claxon tipo platillo marca SAFARI de 12V, potente y duradero para uso en autos y camionetas.'
    },
    {
      titulo: 'Switch con luz 12V 35A (rojo)',
      codigo: 'SIWL02',
      precio: 3.98,
      imagen: 'assets/switchluzA-35A.jpeg',
      fichaTecnica: {
        material: 'ABS y cobre',
        compatibilidad: 'Circuitos eléctricos automotrices',
        color: 'Rojo con negro',
        voltaje: '12V / 35A'
      },
      descripcion: 'Interruptor con luz LED color rojo. Excelente visibilidad para control de luces o accesorios.'
    },
    {
      titulo: 'Chapa de encendido 12V S/M',
      codigo: 'YW1103-M',
      precio: 12.5,
      imagen: 'assets/chapaencendidoS-M.jpeg',
      fichaTecnica: {
        material: 'Metal y plástico',
        compatibilidad: 'Sistemas de arranque de 12V',
        color: 'Plateado',
        tipo: 'Sin manija'
      },
      descripcion: 'Chapa de encendido universal sin manija. Activación de contacto para encendido rápido y seguro.'
    },
    {
      titulo: 'Switch con luz 12V 35A (azul)',
      codigo: 'SIWL04',
      precio: 3.98,
      imagen: 'assets/switchluzAzul-35A.jpeg',
      fichaTecnica: {
        material: 'ABS resistente',
        compatibilidad: 'Accesorios eléctricos de 12V',
        color: 'Azul con negro',
        voltaje: '12V / 35A'
      },
      descripcion: 'Interruptor con LED azul para circuitos eléctricos, ideal para cabinas o zonas con baja visibilidad.'
    },
    {
      titulo: 'Medidor de aire 50 PSI lateral metálico',
      codigo: 'MDAI-03',
      precio: 20.8,
      imagen: 'assets/medidoraire50PSI.jpeg',
      fichaTecnica: {
        material: 'Cuerpo metálico',
        compatibilidad: 'Válvulas estándar de neumáticos',
        color: 'Cromado',
        presiónMáxima: '50 PSI'
      },
      descripcion: 'Medidor de presión lateral, ideal para verificar neumáticos de motocicletas y autos con precisión.'
    },
    {
      titulo: 'Switch/trompo de aceite universal (FEW Japonés)',
      codigo: 'SAFEW02',
      precio: 13.7,
      imagen: 'assets/switch-trompoaceiteU.jpeg',
      fichaTecnica: {
        material: 'Metal con contacto de cobre',
        compatibilidad: 'Motores universales 12V',
        color: 'Plateado',
        activación: 'Presión de aceite'
      },
      descripcion: 'Sensor de presión de aceite tipo trompo universal para control de advertencias en tablero.'
    },
    {
      titulo: 'Tenaza chica POST/NEG',
      codigo: 'TN1',
      precio: 1.6,
      imagen: 'assets/tenazachica.jpeg',
      fichaTecnica: {
        material: 'Acero con revestimiento plástico',
        compatibilidad: 'Baterías de auto o moto',
        color: 'Rojo y negro',
        tamaño: 'Chico'
      },
      descripcion: 'Tenaza pequeña con buena conductividad para conexiones positivas o negativas de baterías.'
    },
    {
      titulo: 'Soquete relay electrónico sin nombre',
      codigo: 'SKE SN',
      precio: 2.3,
      imagen: 'assets/soqueterelay.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y contactos de cobre',
        compatibilidad: 'Relays de 4 y 5 pines',
        color: 'Negro',
        tensión: '12V'
      },
      descripcion: 'Soquete universal para relays automotrices, adaptable a diferentes modelos de 4 o 5 pines.'
    },
    {
      titulo: 'Switch palanca ON/OFF 2P',
      codigo: 'SW-12P',
      precio: 3.5,
      imagen: 'assets/switchpalanca2P.jpeg',
      fichaTecnica: {
        material: 'Metal y base plástica',
        compatibilidad: 'Circuitos de 12V',
        color: 'Negro con palanca metálica',
        pines: '2 pines'
      },
      descripcion: 'Interruptor de palanca ON/OFF de 2 pines, ideal para controlar luces, motores o dispositivos.'
    },
    {
      titulo: 'Claxon de platillo 24V',
      codigo: 'CLXP-24V',
      precio: 16.3,
      imagen: 'assets/claxonplatillo24V.jpeg',
      fichaTecnica: {
        material: 'Acero pintado',
        compatibilidad: 'Sistemas eléctricos de 24V',
        color: 'Negro',
        sonido: 'Tono fuerte tipo platillo'
      },
      descripcion: 'Claxon robusto de 24V, diseñado para vehículos pesados como buses o camiones.'
    },
    {
      titulo: 'Back-up alarm 12V/24V',
      codigo: 'CLXRM-0003',
      precio: 34,
      imagen: 'assets/back-upAlarm.jpeg',
      fichaTecnica: {
        material: 'Plástico resistente al agua',
        compatibilidad: 'Sistemas de retroceso de 12V y 24V',
        color: 'Negro',
        volumen: 'Alta intensidad sonora'
      },
      descripcion: 'Alarma de retroceso dual 12V/24V con sonido de advertencia fuerte, ideal para vehículos de carga.'
    },
    {
      titulo: 'Medidor de aire metálico hasta 50 PSI',
      codigo: 'MDAI-02',
      precio: 11,
      imagen: 'assets/medidoraireH50PSI.jpeg',
      fichaTecnica: {
        material: 'Cuerpo metálico reforzado',
        compatibilidad: 'Válvulas comunes de neumáticos',
        color: 'Cromado',
        rangoPresion: '0-50 PSI'
      },
      descripcion: 'Medidor portátil de aire con precisión media para controlar presión en autos y motocicletas.'
    },
    {
      titulo: 'Tenaza grande',
      codigo: 'TN3',
      precio: 4.55,
      imagen: 'assets/tenazagrande.jpeg',
      fichaTecnica: {
        material: 'Acero galvanizado con aislante',
        compatibilidad: 'Bornes de baterías industriales',
        color: 'Rojo y negro',
        tamaño: 'Grande'
      },
      descripcion: 'Tenaza de gran tamaño para conexión de baterías de vehículos pesados o maquinaria.'
    },
    {
      titulo: 'Conectores hembra/macho 3P (par)',
      codigo: 'CM-H 3 PCN',
      precio: 2.7,
      imagen: 'assets/conectoresH-M3P.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS',
        compatibilidad: 'Conexiones de 3 pines',
        color: 'Negro',
        voltaje: '12V'
      },
      descripcion: 'Conectores eléctricos de 3 vías, permiten armado de circuitos en menor espacio.'
    },
    {
      titulo: 'Filtro universal gasolina',
      codigo: 'FGU02',
      precio: 3.5,
      imagen: 'assets/filtrogasolinaU.jpeg',
      fichaTecnica: {
        material: 'Plástico transparente con malla interna',
        compatibilidad: 'Mangueras de gasolina universales',
        color: 'Transparente',
        diámetro: '6mm y 8mm'
      },
      descripcion: 'Filtro universal para gasolina, permite visualizar el flujo y retener impurezas en líneas de combustible.'
    },
    {
      titulo: 'Switch palanca ON/OFF 3P',
      codigo: 'SW-12P',
      precio: 3.6,
      imagen: 'assets/switchpalanca3P.jpeg',
      fichaTecnica: {
        material: 'Metal con carcasa plástica',
        compatibilidad: 'Sistemas eléctricos automotrices',
        color: 'Negro con palanca metálica',
        pines: '3 pines'
      },
      descripcion: 'Interruptor de palanca robusto de 3 pines para funciones auxiliares como ventiladores o luces.'
    },
    {
      titulo: 'Chapa de encendido universal 12V (metal)',
      codigo: 'YW1102-M12V',
      precio: 21.5,
      imagen: 'assets/chapaencendidoU.jpeg',
      fichaTecnica: {
        material: 'Metal niquelado',
        compatibilidad: 'Sistemas de encendido universales 12V',
        color: 'Plateado',
        función: 'Giro con llave'
      },
      descripcion: 'Chapa metálica de encendido para vehículos o maquinaria liviana, con llave de seguridad.'
    },
    {
      titulo: 'Socket de relay cerámico',
      codigo: 'SKRCCN',
      precio: 2.75,
      imagen: 'assets/socketrelay.png',
      fichaTecnica: {
        material: 'Cerámica y cobre',
        compatibilidad: 'Relays estándar H4 y similares',
        color: 'Blanco con conectores metálicos',
        resistenciaCalor: 'Alta'
      },
      descripcion: 'Soquete de relay cerámico resistente al calor, ideal para focos de alta intensidad o relays potentes.'
    },
    {
      titulo: 'Resistencia de bobina',
      codigo: 'RDB09',
      precio: 6.95,
      imagen: 'assets/resistenciabobina.jpeg',
      fichaTecnica: {
        material: 'Alambre de nicrom y cerámica',
        compatibilidad: 'Encendido de bobinas',
        color: 'Marrón claro',
        resistencia: 'Adaptada para 12V'
      },
      descripcion: 'Resistencia para bobinas de encendido, permite reducir el voltaje y prolongar la vida útil del sistema.'
    },
    {
      titulo: 'Chapa de encendido universal 24V (metal)',
      codigo: 'YW1102-M24V',
      precio: 21.95,
      imagen: 'assets/chapaencendidoU24V.jpeg',
      fichaTecnica: {
        material: 'Metal cromado',
        compatibilidad: 'Sistemas de 24V',
        color: 'Plateado',
        voltaje: '24V'
      },
      descripcion: 'Chapa metálica de encendido para vehículos industriales o maquinaria que opera con 24V.'
    },
    {
      titulo: 'Sirena retroceso 24V “bebé”',
      codigo: 'SRNR24V02',
      precio: 14.7,
      imagen: 'assets/sirenaretroceso24V-BB.jpeg',
      fichaTecnica: {
        material: 'ABS resistente',
        compatibilidad: 'Sistemas eléctricos de 24V',
        color: 'Negro',
        sonido: 'Bebé llorando'
      },
      descripcion: 'Sirena de retroceso para camiones o buses con alerta sonora suave tipo “bebé llorando”.'
    },
    {
      titulo: 'Flasher para Tico 12V 3 pin',
      codigo: 'FSH 3PIN',
      precio: 9.3,
      imagen: 'assets/flasher-Tico.jpeg',
      fichaTecnica: {
        material: 'Plástico y componentes electrónicos',
        compatibilidad: 'Autos Tico o similares',
        color: 'Negro con etiquetas',
        pines: '3 pines'
      },
      descripcion: 'Flasher de 3 pines para sistema direccional de Tico, garantiza parpadeo regular y seguro.'
    },
    {
      titulo: 'Switch palanca ON/OFF 6P',
      codigo: 'SW-I6P-2',
      precio: 4.35,
      imagen: 'assets/switchpalanca6P.jpeg',
      fichaTecnica: {
        material: 'Plástico con palanca metálica',
        compatibilidad: 'Instalaciones eléctricas de 12V',
        color: 'Negro',
        pines: '6 pines'
      },
      descripcion: 'Interruptor de palanca de 6 pines, ideal para proyectos eléctricos que requieren múltiples contactos.'
    },
    {
      titulo: 'Conectores hembra/macho 2P (par)',
      codigo: 'CM-H 2PCN',
      precio: 2.6,
      imagen: 'assets/conectoresH-M2P.jpeg',
      fichaTecnica: {
        material: 'Plástico ABS y cobre',
        compatibilidad: 'Conexiones básicas de 2 pines',
        color: 'Negro',
        tensión: '12V – 24V'
      },
      descripcion: 'Conectores eléctricos de 2 vías, facilitan la unión de cables en sistemas eléctricos simples.'
    },
{
    titulo: 'BORNE PARA TICO',
    codigo: 'BT-0118',
    precio: 2.18,
    imagen: 'assets/BORNE PARA TICO.jpeg',
    fichaTecnica: {
      material: 'Aleación metálica con recubrimiento anticorrosivo',
      compatibilidad: 'Terminales de batería Tico',
      color: 'Plateado',
      tamaño: 'Estándar Tico'
    },
    descripcion: 'Borne metálico diseñado específicamente para terminales de batería de autos Tico, resistente y durable.'
  },
  {
    titulo: 'BORNE TIPO BOSH ESPECIAL',
    codigo: 'BB-0103',
    precio: 2.46,
    imagen: 'assets/switchluzV.jpeg',
    fichaTecnica: {
      material: 'Metal fundido con tuerca ajustable',
      compatibilidad: 'Terminales tipo Bosch',
      color: 'Plata',
      diseño: 'Especial para alto flujo'
    },
    descripcion: 'Borne de conexión tipo Bosch con acabado especial, diseñado para una conducción eléctrica eficiente.'
  },
  {
    titulo: 'CLIP COCODRILO PEQUEÑO ROJO',
    codigo: 'CCPR-01',
    precio: 1.05,
    imagen: 'assets/clipcocodrilorojo.jpeg',
    fichaTecnica: {
      material: 'Acero y recubrimiento plástico',
      compatibilidad: 'Pruebas eléctricas o conexiones temporales',
      color: 'Rojo',
      tamaño: 'Pequeño'
    },
    descripcion: 'Clip cocodrilo pequeño con aislamiento rojo, ideal para conexiones rápidas en pruebas eléctricas.'
  },
  {
    titulo: 'CLIP COCODRILO PEQUEÑO NEGRO',
    codigo: 'CCPN-01',
    precio: 1.05,
    imagen: 'assets/clipcocodrilonegro.jpeg',
    fichaTecnica: {
      material: 'Acero niquelado con aislamiento',
      compatibilidad: 'Circuitos de baja tensión',
      color: 'Negro',
      tamaño: 'Pequeño'
    },
    descripcion: 'Clip cocodrilo aislado en color negro, útil para pruebas o derivaciones en sistemas eléctricos.'
  },
  {
    titulo: 'PROTECTOR DE BORNE NEGRO',
    codigo: 'PBN-07',
    precio: 1.3,
    imagen: 'assets/protectorborneN.jpeg',
    fichaTecnica: {
      material: 'Goma flexible',
      compatibilidad: 'Bornes de batería automotriz',
      color: 'Negro',
      función: 'Aislante de polos'
    },
    descripcion: 'Protector de goma para borne negativo, evita cortocircuitos y prolonga la vida útil del terminal.'
  },
  {
    titulo: 'PROTECTOR DE BORNE ROJO',
    codigo: 'PBR-07',
    precio: 1.3,
    imagen: 'assets/protectorborneR.jpeg',
    fichaTecnica: {
      material: 'Goma flexible',
      compatibilidad: 'Bornes positivos de batería',
      color: 'Rojo',
      función: 'Protección y aislamiento'
    },
    descripcion: 'Protector rojo para borne positivo, esencial para seguridad eléctrica y evitar descargas.'
  },
  {
    titulo: 'FUSIBLE DE LAMINA 20A',
    codigo: 'FSL20',
    precio: 0.65,
    imagen: 'assets/fusiblelamina20A.jpeg',
    fichaTecnica: {
      material: 'Plástico transparente y metal',
      compatibilidad: 'Portafusibles tipo lámina',
      color: 'Amarillo',
      amperaje: '20A'
    },
    descripcion: 'Fusible de lámina de 20 amperios, protección estándar para líneas de 12V en vehículos.'
  },
  {
    titulo: 'FUSIBLE DE LAMINA 30A',
    codigo: 'FSL30',
    precio: 0.65,
    imagen: 'assets/fusiblelamina30A.jpeg',
    fichaTecnica: {
      material: 'Plástico resistente y metal conductor',
      compatibilidad: 'Portafusibles tipo automotriz',
      color: 'Verde',
      amperaje: '30A'
    },
    descripcion: 'Fusible de lámina automotriz de 30A. Protege dispositivos de sobrecargas en instalaciones eléctricas.'
  },
  {
    titulo: 'FUSIBLE DE LAMINA 10A',
    codigo: 'FSL10',
    precio: 0.65,
    imagen: 'assets/fusiblelamina10A.jpeg',
    fichaTecnica: {
      material: 'Plástico transparente y terminal metálica',
      compatibilidad: 'Sistemas eléctricos 12V',
      color: 'Rojo',
      amperaje: '10A'
    },
    descripcion: 'Fusible automotriz de 10A en formato lámina, perfecto para protección de radio, luces o USB.'
  },
  {
    titulo: 'FUSIBLE DE LAMINA 15A',
    codigo: 'FSL15',
    precio: 0.65,
    imagen: 'assets/fusiblelamina15A.jpeg',
    fichaTecnica: {
      material: 'Metal y carcasa plástica',
      compatibilidad: 'Portafusibles estándar',
      color: 'Azul',
      amperaje: '15A'
    },
    descripcion: 'Fusible de 15A con identificación por color. Ideal para sistemas eléctricos medianamente exigentes.'
  }
  ];

  // Ciclo de vida que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit(): void {
    // Crea un observer para animar las tarjetas cuando aparecen en pantalla
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agrega la clase para animación
            observer.unobserve(entry.target);      // Deja de observar la tarjeta
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observa cada tarjeta de producto
    this.cards.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }

  // Navega al detalle del producto seleccionado, pasando el producto por estado
  verDetalle(producto: any) {
    this.router.navigate(['/productos', producto.codigo], {
      state: { producto }
    });
  }
}