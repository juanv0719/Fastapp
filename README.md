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

- **`package.json`**: Gestiona las dependencias del proyecto y los scripts de construcción. Aquí se listan las librerías y herramientas necesarias para el desarrollo y despliegue de la aplicación. Algunas dependencias clave incluyen:

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

- `npm start` (o `ng serve`): Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm test`: Ejecuta las pruebas unitarias.
- `npm run lint`: Ejecuta el linter para verificar el estilo del código.

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

3.  **Navegar a la nueva página:**
    Puedes navegar a la nueva página de varias maneras:

    - **Desde el código (TypeScript):**
      Inyecta el `Router` de Angular en tu componente y usa el método `navigate`:

      ```typescript
      import { Router } from '@angular/router';

      // ...

      constructor(private router: Router) { }

      goToNewPage() {
        this.router.navigate(['/nombre-de-la-pagina']);
      }
      ```

    - **Desde el HTML (usando `routerLink`):**
      En tu plantilla HTML, puedes usar la directiva `routerLink` en un elemento interactivo (como un botón o un enlace):
      ```html
      <ion-button routerLink="/nombre-de-la-pagina">Ir a Nueva Página</ion-button>
      ```

    Después de seguir estos pasos, podrás acceder a tu nueva página navegando a la URL `/nombre-de-la-pagina` en tu navegador o utilizando los métodos de navegación dentro de la aplicación.
