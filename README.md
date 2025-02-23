# Desafío React / MongoDB - Frontend

Este repositorio contiene la aplicación frontend desarrollada con **React** y **TypeScript** para el desafío técnico. La aplicación permite a los usuarios visualizar productos, solicitar precios especiales y gestionar descuentos, comunicándose con la API del backend mediante **Axios**.
---

## Introducción

La aplicación fue diseñada para interactuar con la API del backend, ofreciendo una interfaz de usuario limpia, modular y fácil de usar. Se utiliza **React** junto con **TypeScript** para mejorar la mantenibilidad y robustez del código gracias al tipado estático. Además, **Axios** se emplea para realizar peticiones HTTP de forma sencilla, y la **Context API** de React permite gestionar el estado global (por ejemplo, la información del usuario) sin necesidad de pasar props excesivamente.

---

## Pasos para ejecutar el proyecto localmente

### 1. Clonar el repositorio

   ```bash
   git clone https://github.com/Jumas0210/front-drenvio.git
   cd front-drenvio
  ```


## 2. Instalar dependencias y ejecutar el servidor

Instala las dependencias:

```bash
npm install
```
Para ejecutar el servidor en modo desarrollo, utiliza:

```bash
npm run dev
```

## Justificación de elecciones técnicas

**React con TypeScript:**  
Permite desarrollar interfaces de usuario dinámicas y modulares, mientras que el tipado estático de TypeScript ayuda a detectar errores en tiempo de desarrollo, mejorando la calidad y mantenibilidad del código.

**Axios:**  
Simplifica la realización de peticiones HTTP, permitiendo una comunicación eficiente y sencilla con la API del backend y facilitando el manejo de respuestas basadas en promesas.

**React Context API:**
Se utiliza para gestionar el estado global de la aplicación, evitando el paso excesivo de props y permitiendo un manejo centralizado de la información del usuario y otros estados compartidos.

## Descripción de la estructura del proyecto

**La estructura actual del proyecto es la siguiente:**

```bash
src/
 ├── components/         // Componentes reutilizables (ej. ProductSelect, PriceInput, FormMessage)
 ├── context/            // Contexto para gestionar la información global del usuario (UserContext)
 ├── hooks/              // Hooks personalizados de React
 ├── styles/             // Estilos de la aplicación (CSS/SCSS)
 ├── utils/
 │    └── interfaces/    // Definición de interfaces y tipos (TypeScript)
 └── views/              // Vistas principales de la aplicación (ej. SpecialForm)
app.tsx                 // Componente raíz de la aplicación
main.tsx                // Punto de entrada de React (configurado con Vite)
index.html              // Plantilla HTML
package.json            // Dependencias y scripts
tsconfig.json           // Configuración de TypeScript
vite.config.ts          // Configuración de Vite

```


