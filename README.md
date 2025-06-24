# Fastapp

Este proyecto es una aplicación móvil desarrollada con Ionic Framework y Angular. Utiliza Firebase para la configuración de la base de datos y autenticación.

---

## Estructura del Proyecto y Archivos Clave

- **`src/app/`**: Contiene los módulos y componentes principales de la aplicación, organizados por funcionalidades (e.g., `home`, `login`, `register`, etc.).
- **`src/assets/`**: Almacena recursos estáticos como imágenes.
- **`src/environments/environment.ts`**: Define las variables de entorno para el desarrollo. Incluye la configuración de Firebase, por ejemplo:

  ```typescript
  export const environment = {
    production: false,
    firebaseConfig: {
      apiKey: "TU_API_KEY",
      authDomain: "TU_AUTH_DOMAIN",
      projectId: "TU_PROJECT_ID",
      storageBucket: "TU_STORAGE_BUCKET",
      messagingSenderId: "TU_MESSAGING_SENDER_ID",
      appId: "TU_APP_ID",
      measurementId: "TU_MEASUREMENT_ID",
    },
  };
  ```

- **`package.json`**: Gestiona las dependencias del proyecto y los scripts de construcción.

---

## Guía de Instalación y Ejecución

Sigue estos pasos para instalar y ejecutar el proyecto en cualquier computadora:

### 1. Instalar Node.js y npm

Descarga e instala [Node.js](https://nodejs.org/) (recomendado v18 o superior).  
Esto instalará también `npm`.

### 2. Instalar Git

Descarga e instala [Git](https://git-scm.com/).

### 3. Clonar el repositorio

```bash
git clone https://github.com/juanv0719/Fastapp.git
cd Fastapp
```

### 4. Instalar dependencias

```bash
npm install
```
Nota : si te sale C:\Users\Administrador\Desktop\Fastapp> npm install
npm : No se puede cargar el archivo C:\Program Files\nodejs\npm.ps1. El archivo C:\Program Files\nodejs\npm.ps1 no está firmado digitalmente. No se puede ejecutar este script en el sistema actual.n el sistema actual. ink/?LinkID=135170.
Para obtener más información acerca de la ejecución de scripts y la configuración de la directiva de ejecución, consulta about_Execution_Policies en https:/go.microsoft.com/fwlink/?LinkID=135170.
En línea: 1 Carácter: 1 
--> se debe a que las directivas de windows no permiten instalar nada , para solucionar el error ejecuta en poweshell como admin : Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned  , y responde Y o SI para que cambie la directiva

### 5. Instalar Ionic CLI (si no lo tienes)

```bash
npm install -g @ionic/cli
```

### 6. Abrir el proyecto en Visual Studio Code

- Abre Visual Studio Code.
- Ve a **Archivo > Abrir carpeta...** y selecciona la carpeta `Fastapp`.
- O desde la terminal:
  ```bash
  code .
  ```

### 7. Iniciar el servidor de desarrollo

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

### 1. Generar la nueva página

```bash
ionic generate page nombre-de-la-pagina
```

Esto creará una nueva carpeta en `src/app/nombre-de-la-pagina` con los archivos necesarios (HTML, SCSS, TypeScript).

### 2. Configurar la ruta en `app.routes.ts`

Abre el archivo `src/app/app.routes.ts` y añade una nueva entrada al array `routes`:

```typescript
{
  path: "nombre-de-la-pagina",
  loadComponent: () => import("./nombre-de-la-pagina/nombre-de-la-pagina.page").then((m) => m.NombreDeLaPaginaPage),
},
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

## Notas adicionales

- Si usas Firebase, revisa que el archivo `src/environments/environment.ts` tenga la configuración correcta.
- Si agregas imágenes, colócalas en `src/assets/`.
- Si tienes problemas de dependencias, ejecuta nuevamente `npm install`.
- Si tienes conflictos de puertos, puedes cambiar el puerto así:
  ```bash
  ionic serve --port=8101
  ```

---

## Autor

Juan V
