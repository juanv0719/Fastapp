# Fastapp

Este proyecto es una aplicación móvil desarrollada con Ionic Framework y Angular. Utiliza Firebase para la configuración de la base de datos y autenticación.

## Estructura del Proyecto y Archivos Clave

El proyecto sigue la estructura estándar de una aplicación Ionic/Angular. A continuación, se detallan algunos archivos y directorios importantes:

- **`src/app/`**: Contiene los módulos y componentes principales de la aplicación, organizados por funcionalidades (e.g., `home`, `login`, `register`).
- **`src/assets/`**: Almacena recursos estáticos como imágenes.
- **`src/environments/environment.ts`**: Define las variables de entorno para el desarrollo. Incluye la configuración de Firebase, como se muestra a continuación:

  ```typescript
  export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "AIzaSyAhi261xvEPQCG-yEWMNQcIjwOvrCD-rTo",
      authDomain: "fastapp-75369.firebaseapp.com",
      projectId: "fastapp-75369",
      storageBucket: "fastapp-75369.appspot.com",
      messagingSenderId: "28617958616",
      appId: "1:28617958616:web:9e7e7ec015de6f6627e3ad",
      measurementId: "G-CL6Q00FJLS",
    },
  };
  ```

- **`package.json`**: Gestiona las dependencias del proyecto y los scripts de construcción. Aquí se listan las librerías y herramientas necesarias para el desarrollo y despliegue de la aplicación.

## Guía de Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/juanv0719/Fastapp.git
cd Fastapp
```

### 2. Instalar dependencias

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (recomendado v18 o superior) y [npm](https://www.npmjs.com/).  
Luego instala las dependencias del proyecto:

```bash
npm install
```

### 3. Instalar Ionic CLI (si no lo tienes)

```bash
npm install -g @ionic/cli
```

### 4. Iniciar el servidor de desarrollo

```bash
ionic serve
```
o también puedes usar:
```bash
npm start
```
Esto abrirá la aplicación en tu navegador, normalmente en `http://localhost:8100`.

---

## Scripts disponibles

En el archivo `package.json` se definen los siguientes scripts:

- `npm start` (o `ng serve`): Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm test`: Ejecuta las pruebas unitarias.
- `npm run lint`: Ejecuta el linter para verificar el estilo del código.

---

## Crear y Navegar a Nuevas Páginas

Para añadir una nueva página a tu aplicación y permitir la navegación a ella, sigue estos pasos:

### 1. Generar la nueva página

```bash
ionic generate page nombre-de-la-pagina // asi van a crear con toda la estructura de la pagina y lista para que solo coloquen su codigo
```

Esto creará una nueva carpeta en `src/app/nombre-de-la-pagina` con los archivos necesarios (HTML, CSS, TypeScript).

### 2. Configurar la ruta en `app.routes.ts`

Abre el archivo `src/app/app.routes.ts` y añade una nueva entrada al array `routes`. Asegúrate de importar el módulo de la nueva página.

```typescript
// ... otras importaciones
import { NombreDeLaPaginaPage } from "./nombre-de-la-pagina/nombre-de-la-pagina.page";

export const routes: Routes = [
  // ... otras rutas existentes
  {
    path: "nombre-de-la-pagina",
    loadComponent: () => import("./nombre-de-la-pagina/nombre-de-la-pagina.page").then((m) => m.NombreDeLaPaginaPage),
  },
];
```

**Nota:** Reemplaza `NombreDeLaPaginaPage` y `nombre-de-la-pagina` con los nombres correctos de tu página.

### 3. Navegar a la nueva página

- **Desde el código (TypeScript):**

  ```typescript
  import { Router } from '@angular/router';

  constructor(private router: Router) { }

  goToNewPage() {
    this.router.navigate(['/nombre-de-la-pagina']);
  }
  ```

- **Desde el HTML (usando `routerLink`):**

  ```html
  <ion-button routerLink="/nombre-de-la-pagina">Ir a Nueva Página</ion-button>
  ```

Después de seguir estos pasos, podrás acceder a tu nueva página navegando a la URL `/nombre-de-la-pagina` en tu navegador o utilizando los métodos de navegación dentro de la aplicación.

---

## Autor

Repositorio
