# Fastapp

Este proyecto es una aplicación móvil desarrollada con Ionic Framework y Angular, diseñada para [**Descripción del proyecto: Añadir aquí una breve descripción de la funcionalidad principal de la aplicación, por ejemplo, 'gestionar tareas', 'mostrar información de productos', 'plataforma de comunicación', etc.**]. Utiliza Firebase para la configuración de la base de datos y autenticación.

## Estructura del Proyecto y Archivos Clave

El proyecto sigue la estructura estándar de una aplicación Ionic/Angular. A continuación, se detallan algunos archivos y directorios importantes:

-   **`src/app/`**: Contiene los módulos y componentes principales de la aplicación, organizados por funcionalidades (e.g., `home`, `login`, `register`, `filtros`).
-   **`src/assets/`**: Almacena recursos estáticos como imágenes (`Intro.gif`, `bienvenido.png`, `logo.png`).
-   **`src/environments/environment.ts`**: Define las variables de entorno para el desarrollo. Incluye la configuración de Firebase, como se muestra a continuación:

    ```typescript
    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyAhi261xvEPQCG-yEWMNQcIjwOvrCD-rTo',
        authDomain: 'fastapp-75369.firebaseapp.com',
        projectId: 'fastapp-75369',
        storageBucket: 'fastapp-75369.appspot.com',
        messagingSenderId: '28617958616',
        appId: '1:28617958616:web:9e7e7ec015de6f6627e3ad',
        measurementId: 'G-CL6Q00FJLS',
      },
    };
    ```

-   **`package.json`**: Gestiona las dependencias del proyecto y los scripts de construcción. Aquí se listan las librerías y herramientas necesarias para el desarrollo y despliegue de la aplicación. Algunas dependencias clave incluyen:

    ```json
    {
      "name": "myApp",
      "version": "0.0.1",
      "author": "Ionic Framework",
      "homepage": "https://ionicframework.com/",
      "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "watch": "ng build --watch --configuration development",
        "test": "ng test",
        "lint": "ng lint"
      },
      "private": true,
      "dependencies": {
        "@angular/animations": "^19.0.0",
        "@angular/common": "^19.0.0",
        "@angular/core": "^19.0.0",
        "@angular/forms": "^19.0.0",
        "@angular/platform-browser": "^19.0.0",
        "@angular/platform-browser-dynamic": "^19.0.0",
        "@angular/router": "^19.0.0",
        "@capacitor/app": "7.0.1",
        "@capacitor/core": "7.4.0",
        "@capacitor/haptics": "7.0.1",
        "@capacitor/keyboard": "7.0.1",
        "@capacitor/status-bar": "7.0.1",
        "@ionic/angular": "^8.0.0",
        "firebase": "^11.9.1",
        "ionicons": "^7.0.0",
        "rxjs": "~7.8.0",
        "tslib": "^2.3.0",
        "zone.js": "~0.15.0"
      },
      "devDependencies": {
        "@angular-devkit/build-angular": "^19.0.0",
        "@angular-eslint/builder": "^19.0.0",
        "@angular-eslint/eslint-plugin": "^19.0.0",
        "@angular-eslint/eslint-plugin-template": "^19.0.0",
        "@angular-eslint/schematics": "^19.0.0",
        "@angular-eslint/template-parser": "^19.0.0",
        "@angular/cli": "^19.0.0",
        "@angular/compiler-cli": "^19.0.0",
        "@angular/language-service": "^19.0.0",
        "@capacitor/cli": "7.4.0",
        "@ionic/angular-toolkit": "^12.0.0",
        "@types/jasmine": "~5.1.0",
        "@typescript-eslint/eslint-plugin": "^8.18.0",
        "@typescript-eslint/parser": "^8.18.0",
        "eslint": "^9.16.0",
        "eslint-plugin-import": "^2.29.1",
        "eslint-plugin-jsdoc": "^48.2.1",
        "eslint-plugin-prefer-arrow": "1.2.2",
        "jasmine-core": "~5.1.0",
        "jasmine-spec-reporter": "~5.0.0",
        "karma": "~6.4.0",
        "karma-chrome-launcher": "~3.2.0",
        "karma-coverage": "~2.2.0",
        "karma-jasmine": "~5.1.0",
        "karma-jasmine-html-reporter": "~2.1.0",
        "typescript": "~5.6.3"
      },
      "description": "An Ionic project"
    }
    ```

## Lógica de Creación

Este proyecto fue generado inicialmente utilizando el [Ionic CLI](https://ionicframework.com/docs/cli). La estructura base y los archivos esenciales se crearon automáticamente al iniciar un nuevo proyecto Ionic. Los componentes y páginas adicionales se generan utilizando comandos específicos de Ionic CLI.

## Configuración del Entorno y Comandos Básicos

Para levantar el proyecto y trabajar con él, sigue los siguientes pasos:

1.  **Instalar dependencias:**
    Abre una terminal en la raíz del proyecto (`c:\Users\GRE\Downloads\A\Fastapp`) y ejecuta:
    ```bash
    npm install
    ```

2.  **Iniciar el servidor de desarrollo:**
    Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo con:
    ```bash
    npm start
    ```
    Este comando ejecuta `ng serve` internamente, que es el script definido en el `package.json` para iniciar el servidor de desarrollo. Esto levantará la aplicación en `http://localhost:8100` (o un puerto similar).

### Scripts disponibles

En el archivo `package.json` se definen los siguientes scripts:

-   `npm start` (o `ng serve`): Inicia el servidor de desarrollo.
-   `npm run build`: Compila el proyecto para producción.
-   `npm test`: Ejecuta las pruebas unitarias.
-   `npm run lint`: Ejecuta el linter para verificar el estilo del código.

### Comandos útiles de Ionic CLI

-   **Generar una nueva página, componente, servicio, etc.:**
    Para generar una nueva página (por ejemplo, `filtros`), puedes usar el siguiente comando:
    ```bash
    ionic generate page filtros
    ```
    Este comando creará automáticamente los archivos necesarios para la página `filtros` dentro de `src/app/filtros/`.

## Creación y Navegación de Nuevas Páginas

Para añadir una nueva página a tu aplicación y permitir la navegación a ella, sigue estos pasos:

1.  **Generar la nueva página:**
    Abre tu terminal en la raíz del proyecto y ejecuta el siguiente comando, reemplazando `nombre-de-la-pagina` con el nombre deseado para tu nueva página (por ejemplo, `detalles`):
    ```bash
    ionic generate page nombre-de-la-pagina
    ```
    Esto creará una nueva carpeta en `src/app/nombre-de-la-pagina` con los archivos necesarios (HTML, CSS, TypeScript).

2.  **Configurar la ruta en `app.routes.ts`:**
    Abre el archivo <mcfile name="app.routes.ts" path="src/app/app.routes.ts"></mcfile> (ubicado en `src/app/app.routes.ts`) y añade una nueva entrada al array `routes`. Asegúrate de importar el módulo de la nueva página.

    ```typescript
    // ... otras importaciones
    import { NombreDeLaPaginaPage } from './nombre-de-la-pagina/nombre-de-la-pagina.page';

    export const routes: Routes = [
      // ... otras rutas existentes
      {
        path: 'nombre-de-la-pagina',
        loadComponent: () => import('./nombre-de-la-pagina/nombre-de-la-pagina.page').then(m => m.NombreDeLaPaginaPage)
      }
    ];
    ```
    **Nota:** Reemplaza `NombreDeLaPaginaPage` y `nombre-de-la-pagina` con los nombres correctos de tu página.

3.  **Navegar a la nueva página:**
    Puedes navegar a la nueva página de varias maneras:

    *   **Desde el código (TypeScript):**
        Inyecta el `Router` de Angular en tu componente y usa el método `navigate`:
        ```typescript
        import { Router } from '@angular/router';

        // ...

        constructor(private router: Router) { }

        goToNewPage() {
          this.router.navigate(['/nombre-de-la-pagina']);
        }
        ```

    *   **Desde el HTML (usando `routerLink`):**
        En tu plantilla HTML, puedes usar la directiva `routerLink` en un elemento interactivo (como un botón o un enlace):
        ```html
        <ion-button routerLink="/nombre-de-la-pagina">Ir a Nueva Página</ion-button>
        ```

    Después de seguir estos pasos, podrás acceder a tu nueva página navegando a la URL `/nombre-de-la-pagina` en tu navegador o utilizando los métodos de navegación dentro de la aplicación.
