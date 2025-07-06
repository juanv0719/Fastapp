import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    {
  titulo: 'Switch con luz 12V 35A (verde)',
  codigo: 'SIWL03',
  precio: 3.98,
  imagen: 'assets/switchluzV.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Vehículos 12 V universales' },
    { label: 'Color', value: 'Verde (LED)' },
    { label: 'Cierre', value: 'Interruptor basculante SPST 35 A' }
  ],
  descripcion: 'Interruptor basculante con luz LED verde, diseño compacto, ideal para controlar accesorios automotrices.'
},
{
  titulo: 'Claxon tono alto tipo disco 12V SEGER',
  codigo: 'CLXP-0001',
  precio: 27.5,
  imagen: 'assets/claxonseger.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Vehículos 12 V' },
    { label: 'Color', value: 'Negro/naranja' },
    { label: 'Cierre', value: 'Disco tono alto (≈115 dB)' }
  ],
  descripcion: 'Claxon tipo disco con sonido potente, ideal para señales de seguridad y uso vehicular.'
},
{
  titulo: 'Medidor de aire metálico hasta 120 PSI',
  codigo: 'MDAI-01',
  precio: 14.45,
  imagen: 'assets/medidoraire.jpeg',
  ficha: [
    { label: 'Material', value: 'Carcasa metálica' },
    { label: 'Compatibilidad', value: 'Inflado hasta 120 PSI' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Escala analógica' }
  ],
  descripcion: 'Manómetro robusto y preciso, ideal para verificar presión de llantas hasta 120 PSI.'
},
{
  titulo: 'Tapa de gasolina cromada 35mm',
  codigo: 'TGC.01',
  precio: 20.5,
  imagen: 'assets/tapacromada.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Depósitos Ø 35 mm' },
    { label: 'Color', value: 'Cromado brillante' },
    { label: 'Cierre', value: 'Rosca desmontable' }
  ],
  descripcion: 'Tapa cromada para tanque de gasolina, acabado elegante y resistente a corrosión.'
},
{
  titulo: 'Soquete de lágrima para foco – 158',
  codigo: 'SKL2C',
  precio: 1.2,
  imagen: 'assets/soquetefoco.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y contactos metálicos' },
    { label: 'Compatibilidad', value: 'Focos tipo 158' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Encaje estándar' }
  ],
  descripcion: 'Soquete para instalar foco tipo 158 con contactos seguros y soporte aislante.'
},
{
  titulo: 'Filtro gasolina Toyota (Corona, Corolla)',
  codigo: 'FGU05',
  precio: 15.55,
  imagen: 'assets/filtrogasolina-corolla.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y celulosa filtrante' },
    { label: 'Compatibilidad', value: 'Toyota Corona/Corolla 12 V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Encaje de presión' }
  ],
  descripcion: 'Filtro de gasolina original para modelos Toyota, mantiene el sistema libre de impurezas.'
},
{
  titulo: 'Switch palanca ON/OFF 6P',
  codigo: 'SW-I6P',
  precio: 4.35,
  imagen: 'assets/switchpalanca.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: '12 V universales' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Palanca ON/OFF 6 terminales' }
  ],
  descripcion: 'Interruptor de palanca con seis pines, ideal para paneles de control y equipos eléctricos.'
},
{
  titulo: 'Switch/trompo de aceite Nissan (FEW Japonés)',
  codigo: 'SAFEW01',
  precio: 12.9,
  imagen: 'assets/switchtrompo-nissan.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal y plástico' },
    { label: 'Compatibilidad', value: 'Modelos Nissan FEW' },
    { label: 'Color', value: 'Negro/Plateado' },
    { label: 'Cierre', value: 'Tipo trompo roscado' }
  ],
  descripcion: 'Switch o trompo de aceite compatible con motores FEW de Nissan, resistente al calor y presión.'
},
{
  titulo: 'Switch con luz OFF 12V 3 pines 4 clips rojo',
  codigo: 'SIWL06',
  precio: 0.75,
  imagen: 'assets/switchluzR.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: '12 V universales' },
    { label: 'Color', value: 'Rojo (LED)' },
    { label: 'Cierre', value: 'Interruptor 3 pines + 4 clips' }
  ],
  descripcion: 'Interruptor compacto rojo con luz y terminales tipo clip, ideal para tableros de autos.'
},
{
  titulo: 'Chanchito arrancador 12V',
  codigo: 'SRL13',
  precio: 22.8,
  imagen: 'assets/chanchitoarrancador.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico resistente' },
    { label: 'Compatibilidad', value: 'Baterías 12 V' },
    { label: 'Color', value: 'Negro/amarillo' },
    { label: 'Cierre', value: 'Pinzas tipo chanchito' }
  ],
  descripcion: 'Pinzas arrancadoras tipo chanchito para conexiones seguras en baterías de 12 V.'
},
{
  titulo: 'Relay electrónico',
  codigo: 'RE15',
  precio: 22.7,
  imagen: 'assets/relayelectronico.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y cobre' },
    { label: 'Compatibilidad', value: 'Sistemas eléctricos 12 V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Base de 5 pines' }
  ],
  descripcion: 'Relay electrónico confiable para circuitos de alta y baja carga en automóviles y maquinaria.'
},
{
  titulo: 'Switch levanta luna tipo flecha',
  codigo: 'SLL01',
  precio: 6.5,
  imagen: 'assets/switchlevantaluna.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico ABS' },
    { label: 'Compatibilidad', value: 'Sistemas levanta lunas eléctricos' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Botón tipo flecha' }
  ],
  descripcion: 'Botón levanta luna con diseño tipo flecha, suave accionamiento y alta durabilidad.'
},
{
  titulo: 'Tapa de gasolina con rosca sin llave',
  codigo: 'TGC-03',
  precio: 9.3,
  imagen: 'assets/tapagasolinaR-sinllave.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y goma' },
    { label: 'Compatibilidad', value: 'Tanques roscados universales' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Rosca, sin llave' }
  ],
  descripcion: 'Tapa de gasolina universal con rosca de seguridad que evita fugas y entrada de polvo.'
},
{
  titulo: 'Encendedor universal 12V completo',
  codigo: 'EDC04',
  precio: 9.9,
  imagen: 'assets/encendedoruniversal.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal y plástico' },
    { label: 'Compatibilidad', value: 'Vehículos 12 V' },
    { label: 'Color', value: 'Negro plateado' },
    { label: 'Cierre', value: 'Botón pulsador' }
  ],
  descripcion: 'Encendedor universal completo para vehículos, rápido calentamiento y diseño estándar.'
},
{
  titulo: 'Sirena retroceso 12V “bebé”',
  codigo: 'SRNR12V01',
  precio: 14.7,
  imagen: 'assets/sirenaretroceso-BB.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico ABS' },
    { label: 'Compatibilidad', value: 'Sistemas de reversa 12 V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Soporte metálico' }
  ],
  descripcion: 'Sirena de reversa de bajo tamaño, potente sonido para alertar peatones al retroceder.'
},
{
  titulo: 'Porta fusible de uña rojo y negro (x10 und)',
  codigo: 'PFUÑA01',
  precio: 2.15,
  imagen: 'assets/portafusibleRyN.png',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Fusibles tipo uña' },
    { label: 'Color', value: 'Rojo y negro' },
    { label: 'Cierre', value: 'Clip de seguridad' }
  ],
  descripcion: 'Porta fusible compacto para fusibles tipo uña, ideal para instalaciones eléctricas seguras.'
},
{
  titulo: 'Switch con luz 12V 35A (amarillo)',
  codigo: 'SIWL01',
  precio: 3.98,
  imagen: 'assets/switchluzA.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Circuitos de 12 V' },
    { label: 'Color', value: 'Amarillo (LED)' },
    { label: 'Cierre', value: 'Basculante 35A' }
  ],
  descripcion: 'Interruptor basculante con luz LED amarilla, robusto para conexiones eléctricas automotrices.'
},
{
  titulo: 'Tapa de gasolina con rosca y llave',
  codigo: 'TGC-02',
  precio: 11.8,
  imagen: 'assets/tapagasolinaR-conllave.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Depósitos roscados estándar' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Rosca con llave' }
  ],
  descripcion: 'Tapa de gasolina con cierre seguro mediante llave para evitar accesos no autorizados.'
},
{
  titulo: 'Medidor de aire 120 PSI diagonal',
  codigo: 'MDA4I',
  precio: 26.9,
  imagen: 'assets/medidoraireD.png',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Neumáticos hasta 120 PSI' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Cabezal diagonal' }
  ],
  descripcion: 'Medidor de aire metálico con cabezal en ángulo, facilita la lectura y acceso en neumáticos.'
},
{
  titulo: 'Filtro metal Nissan',
  codigo: 'FUG04',
  precio: 7.56,
  imagen: 'assets/filtrometal-Nissan.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal y papel filtrante' },
    { label: 'Compatibilidad', value: 'Modelos Nissan' },
    { label: 'Color', value: 'Negro metálico' },
    { label: 'Cierre', value: 'Rosca estándar' }
  ],
  descripcion: 'Filtro de gasolina metálico, asegura la pureza del combustible en motores Nissan.'
},
{
  titulo: 'Tenaza mediana POS/NEG',
  codigo: 'TN2',
  precio: 2.91,
  imagen: 'assets/tenazamedianaPOS-NEG.jpeg',
  ficha: [
    { label: 'Material', value: 'Acero galvanizado' },
    { label: 'Compatibilidad', value: 'Terminales de batería' },
    { label: 'Color', value: 'Rojo y negro' },
    { label: 'Cierre', value: 'Mordaza con resorte' }
  ],
  descripcion: 'Tenaza mediana para conexión rápida de bornes positivo y negativo en sistemas eléctricos.'
},
{
  titulo: 'Socket de faro H4 (Taiwán)',
  codigo: 'SKF H4',
  precio: 3.69,
  imagen: 'assets/socketfaro-T.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico resistente al calor' },
    { label: 'Compatibilidad', value: 'Lámparas H4' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Terminales metálicos' }
  ],
  descripcion: 'Socket fabricado en Taiwán para focos H4, soporta altas temperaturas y asegura conexión firme.'
},
{
  titulo: 'Relay tablero 5P 24V con doble resistencia',
  codigo: 'RDT5P24',
  precio: 5.2,
  imagen: 'assets/relaytablero2R.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y cobre' },
    { label: 'Compatibilidad', value: 'Sistemas eléctricos 24 V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: '5 pines doble resistencia' }
  ],
  descripcion: 'Relay de 24V con doble resistencia, utilizado en tableros y sistemas eléctricos pesados.'
},
{
  titulo: 'Conectores hembra/macho 4P (par)',
  codigo: 'CM-H4PCN',
  precio: 3.2,
  imagen: 'assets/conectorHM.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y cobre' },
    { label: 'Compatibilidad', value: 'Circuitos eléctricos' },
    { label: 'Color', value: 'Negro y rojo' },
    { label: 'Cierre', value: 'Click de seguridad' }
  ],
  descripcion: 'Juego de conectores hembra/macho de 4 pines, perfecto para conexiones seguras en vehículos.'
},
{
  titulo: 'Conectores hembra/macho 6P (par)',
  codigo: 'CM-H 6PCN',
  precio: 4.8,
  imagen: 'assets/conectorHM-6p.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y latón' },
    { label: 'Compatibilidad', value: 'Instalaciones eléctricas' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Pestaña de ajuste' }
  ],
  descripcion: 'Conectores de 6 pines hembra y macho, ideales para arneses eléctricos y reparaciones automotrices.'
},
{
  titulo: 'Relay tablero 5P 12V con doble resistencia',
  codigo: 'RDT5P12',
  precio: 5.2,
  imagen: 'assets/relaytablero5P-2R.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y aleación de cobre' },
    { label: 'Compatibilidad', value: 'Tableros eléctricos 12 V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: '5 pines doble resistencia' }
  ],
  descripcion: 'Relay de 5 pines para 12V, con doble resistencia para mayor durabilidad y seguridad.'
},
{
  titulo: 'Claxon de platillo 12V SAFARI',
  codigo: 'CLXP-12V',
  precio: 15.25,
  imagen: 'assets/claxonplatillo-S.jpeg',
  ficha: [
    { label: 'Material', value: 'Acero pintado' },
    { label: 'Compatibilidad', value: 'Autos y camiones 12 V' },
    { label: 'Color', value: 'Negro y rojo' },
    { label: 'Cierre', value: 'Base con tornillo' }
  ],
  descripcion: 'Claxon tipo platillo 12V de alta sonoridad, ideal para vehículos que requieren alerta potente.'
},
{
  titulo: 'Switch con luz 12V 35A (rojo)',
  codigo: 'SIWL02',
  precio: 3.98,
  imagen: 'assets/switchluzA-35A.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Circuitos 12 V' },
    { label: 'Color', value: 'Rojo' },
    { label: 'Cierre', value: 'Basculante con luz' }
  ],
  descripcion: 'Interruptor basculante con luz LED roja, apto para circuitos eléctricos de automóviles y motos.'
},
{
  titulo: 'Chapa de encendido 12V S/M',
  codigo: 'YW1103-M',
  precio: 12.5,
  imagen: 'assets/chapaencendidoS-M.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado y plástico' },
    { label: 'Compatibilidad', value: 'Encendido automotriz 12 V' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Llave mecánica' }
  ],
  descripcion: 'Chapa de encendido 12V de tamaño mediano, incluye juego de llaves para seguridad del vehículo.'
},
{
  titulo: 'Switch con luz 12V 35A (azul)',
  codigo: 'SIWL04',
  precio: 3.98,
  imagen: 'assets/switchluzAzul-35A.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico ABS y cobre' },
    { label: 'Compatibilidad', value: 'Circuitos de 12 V' },
    { label: 'Color', value: 'Azul' },
    { label: 'Cierre', value: 'Basculante iluminado' }
  ],
  descripcion: 'Interruptor basculante con LED azul, diseñado para aplicaciones eléctricas automotrices.'
},
{
  titulo: 'Medidor de aire 50 PSI lateral metálico',
  codigo: 'MDAI-03',
  precio: 20.8,
  imagen: 'assets/medidoraire50PSI.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Neumáticos hasta 50 PSI' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Cabezal lateral' }
  ],
  descripcion: 'Medidor de presión lateral metálico, preciso y fácil de usar para neumáticos de autos o motos.'
},
{
  titulo: 'Switch/trompo de aceite universal (FEW Japonés)',
  codigo: 'SAFEW02',
  precio: 13.7,
  imagen: 'assets/switch-trompoaceiteU.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal y plástico' },
    { label: 'Compatibilidad', value: 'Motores universales' },
    { label: 'Color', value: 'Plateado y negro' },
    { label: 'Cierre', value: 'Rosca estándar' }
  ],
  descripcion: 'Sensor de presión de aceite universal, marca FEW Japonés, alta precisión y durabilidad.'
},
{
  titulo: 'Tenaza chica POST/NEG',
  codigo: 'TN1',
  precio: 1.6,
  imagen: 'assets/tenazachica.jpeg',
  ficha: [
    { label: 'Material', value: 'Acero niquelado' },
    { label: 'Compatibilidad', value: 'Bornes de batería' },
    { label: 'Color', value: 'Rojo y negro' },
    { label: 'Cierre', value: 'Mordaza con resorte' }
  ],
  descripcion: 'Tenaza pequeña para conexiones rápidas en bornes positivo y negativo de baterías.'
},
{
  titulo: 'Soquete relay electrónico sin nombre',
  codigo: 'SKE SN',
  precio: 2.3,
  imagen: 'assets/soqueterelay.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico resistente' },
    { label: 'Compatibilidad', value: 'Relays universales' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Terminales de cobre' }
  ],
  descripcion: 'Soquete para relays electrónicos, sin marca específica, resistente y confiable.'
},
{
  titulo: 'Switch palanca ON/OFF 2P',
  codigo: 'SW-12P',
  precio: 3.5,
  imagen: 'assets/switchpalanca2P.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal y plástico' },
    { label: 'Compatibilidad', value: 'Circuitos 12V' },
    { label: 'Color', value: 'Negro con palanca cromada' },
    { label: 'Cierre', value: 'Mecánico de dos posiciones' }
  ],
  descripcion: 'Switch de palanca ON/OFF 2P para circuitos eléctricos, robusto y duradero.'
},
{
  titulo: 'Claxon de platillo 24V',
  codigo: 'CLXP-24V',
  precio: 16.3,
  imagen: 'assets/claxonplatillo24V.jpeg',
  ficha: [
    { label: 'Material', value: 'Acero pintado' },
    { label: 'Compatibilidad', value: 'Sistemas eléctricos 24V' },
    { label: 'Color', value: 'Negro y rojo' },
    { label: 'Cierre', value: 'Montaje por tornillo' }
  ],
  descripcion: 'Claxon de platillo 24V con tono alto, ideal para camiones y vehículos industriales.'
},
{
  titulo: 'Back-up alarm 12V/24V',
  codigo: 'CLXRM-0003',
  precio: 34,
  imagen: 'assets/back-upAlarm.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico ABS' },
    { label: 'Compatibilidad', value: 'Sistemas 12V y 24V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Soporte metálico' }
  ],
  descripcion: 'Alarma de reversa universal compatible con sistemas 12V y 24V, potente sonido de alerta.'
},
{
  titulo: 'Medidor de aire metálico hasta 50 PSI',
  codigo: 'MDAI-02',
  precio: 11,
  imagen: 'assets/medidoraireH50PSI.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Neumáticos hasta 50 PSI' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Cabezal recto' }
  ],
  descripcion: 'Medidor de aire metálico, compacto y preciso para neumáticos de autos y motocicletas.'
},
{
  titulo: 'Tenaza grande',
  codigo: 'TN3',
  precio: 4.55,
  imagen: 'assets/tenazagrande.jpeg',
  ficha: [
    { label: 'Material', value: 'Acero reforzado' },
    { label: 'Compatibilidad', value: 'Bornes y cables eléctricos' },
    { label: 'Color', value: 'Rojo y negro' },
    { label: 'Cierre', value: 'Mordaza grande con resorte' }
  ],
  descripcion: 'Tenaza de gran tamaño, ideal para trabajos pesados en conexiones eléctricas automotrices.'
},
{
  titulo: 'Conectores hembra/macho 3P (par)',
  codigo: 'CM-H 3 PCN',
  precio: 2.7,
  imagen: 'assets/conectoresH-M3P.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y latón' },
    { label: 'Compatibilidad', value: 'Circuitos eléctricos 12V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Click de seguridad' }
  ],
  descripcion: 'Juego de conectores hembra y macho de 3 pines para uniones seguras en sistemas eléctricos.'
},
{
  titulo: 'Filtro universal gasolina',
  codigo: 'FGU02',
  precio: 3.5,
  imagen: 'assets/filtrogasolinaU.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico transparente' },
    { label: 'Compatibilidad', value: 'Motores gasolina universales' },
    { label: 'Color', value: 'Transparente' },
    { label: 'Cierre', value: 'Entrada y salida para manguera' }
  ],
  descripcion: 'Filtro universal para gasolina, transparente para fácil inspección de fluido y suciedad.'
},
{
  titulo: 'Switch palanca ON/OFF 3P',
  codigo: 'SW-12P',
  precio: 3.6,
  imagen: 'assets/switchpalanca3P.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y metal' },
    { label: 'Compatibilidad', value: 'Circuitos eléctricos 12V' },
    { label: 'Color', value: 'Negro con palanca cromada' },
    { label: 'Cierre', value: 'Mecánico de tres pines' }
  ],
  descripcion: 'Switch palanca ON/OFF de 3 pines, ideal para controlar circuitos eléctricos en vehículos.'
},
{
  titulo: 'Chapa de encendido universal 12V (metal)',
  codigo: 'YW1102-M',
  precio: 21.5,
  imagen: 'assets/chapaencendidoU.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Sistemas de encendido 12V' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Con llave' }
  ],
  descripcion: 'Chapa de encendido universal metálica para autos de 12V, incluye juego de llaves.'
},
{
  titulo: 'Socket de relay cerámico',
  codigo: 'SKRCCN',
  precio: 2.75,
  imagen: 'assets/socketrelay.png',
  ficha: [
    { label: 'Material', value: 'Cerámica y cobre' },
    { label: 'Compatibilidad', value: 'Relays de alta temperatura' },
    { label: 'Color', value: 'Blanco' },
    { label: 'Cierre', value: 'Terminales reforzados' }
  ],
  descripcion: 'Socket cerámico diseñado para soportar altas temperaturas, perfecto para relays eléctricos.'
},
{
  titulo: 'Resistencia de bobina',
  codigo: 'RDB09',
  precio: 6.95,
  imagen: 'assets/resistenciaBobina.jpeg',
  ficha: [
    { label: 'Material', value: 'Cerámica y alambre nichrome' },
    { label: 'Compatibilidad', value: 'Circuitos de encendido' },
    { label: 'Color', value: 'Beige' },
    { label: 'Cierre', value: 'Terminales metálicos' }
  ],
  descripcion: 'Resistencia para bobina de encendido, regula corriente para proteger el sistema eléctrico.'
},
{
  titulo: 'Chapa de encendido universal 24V (metal)',
  codigo: 'YW1102-M',
  precio: 21.95,
  imagen: 'assets/chapaencendidoU24V.jpeg',
  ficha: [
    { label: 'Material', value: 'Metal cromado' },
    { label: 'Compatibilidad', value: 'Sistemas de encendido 24V' },
    { label: 'Color', value: 'Plateado' },
    { label: 'Cierre', value: 'Con llave' }
  ],
  descripcion: 'Chapa de encendido universal metálica, diseñada para sistemas eléctricos de 24V.'
},
{
  titulo: 'Sirena retroceso 24V “bebé”',
  codigo: 'SRNR24V02',
  precio: 14.7,
  imagen: 'assets/sirenaretroceso24V-BB.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico ABS' },
    { label: 'Compatibilidad', value: 'Sistemas eléctricos 24V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Montaje por tornillo' }
  ],
  descripcion: 'Sirena de retroceso 24V modelo “bebé”, produce fuerte alerta sonora para seguridad de maniobras.'
},
{
  titulo: 'Flasher para Tico 12V 3 pin',
  codigo: 'FSH 3PIN',
  precio: 9.3,
  imagen: 'assets/flasher-Tico.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y cobre' },
    { label: 'Compatibilidad', value: 'Sistema eléctrico Daewoo Tico' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: '3 pines metálicos' }
  ],
  descripcion: 'Flasher eléctrico de 3 pines para Daewoo Tico, controla el parpadeo de luces direccionales.'
},
{
  titulo: 'Switch palanca ON/OFF 6P',
  codigo: 'SW-I6P',
  precio: 4.35,
  imagen: 'assets/switchpalanca6P.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico resistente y cobre' },
    { label: 'Compatibilidad', value: 'Circuitos de 12V' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Mecánico de seis pines' }
  ],
  descripcion: 'Switch palanca ON/OFF 6P para distribución de múltiples circuitos en instalaciones eléctricas.'
},
{
  titulo: 'Conectores hembra/macho 2P (par)',
  codigo: 'CM-H 2PCN',
  precio: 2.2,
  imagen: 'assets/conectoresH-M2P.jpeg',
  ficha: [
    { label: 'Material', value: 'Plástico y cobre' },
    { label: 'Compatibilidad', value: 'Circuitos eléctricos básicos' },
    { label: 'Color', value: 'Negro' },
    { label: 'Cierre', value: 'Click de seguridad' }
  ],
  descripcion: 'Par de conectores hembra/macho de 2 pines, prácticos para reparaciones rápidas en cables eléctricos.'
}































  ];

  getProductos() {
    return this.productos;
  }

  getProductoPorCodigo(codigo: string) {
    return this.productos.find(p => p.codigo === codigo);
  }
}