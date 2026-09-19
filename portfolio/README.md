# Portfolio — Full Stack Developer

Proyecto en React + Vite (JavaScript puro, sin TypeScript) con:

- Modo claro/oscuro real (persistido en `localStorage`)
- Animaciones con **Framer Motion**
- Destellos que siguen al mouse (`MouseSparkles`)
- Terminal secreta: presioná **`~`** en cualquier momento
- Galería de fotos/videos por proyecto con **lightbox** (click para ver en grande, con flechas y teclado)
- Todo el contenido (proyectos, skills) sale de archivos de datos, no está hardcodeado en el diseño

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:5173

Para producción:

```bash
npm run build
npm run preview
```

## Cómo agregar un proyecto nuevo

1. Creá una carpeta en `public/media/tu-proyecto/` y poné ahí las imágenes (`cover.jpg`, `screen1.jpg`, ...) y el video si tenés (`demo.mp4`).
2. Abrí `src/data/projects.js` y copiá/pegá un objeto del array, cambiando:
   - `title`, `description`
   - `problem`, `approach`, `result` (tu case study)
   - `stack`: array de tecnologías
   - `cover`: ruta a la imagen de portada
   - `gallery`: array de imágenes (`/media/tu-proyecto/screen1.jpg`, ...)
   - `video`: ruta al video o `null` si no tenés
   - `demoUrl`, `repoUrl`
   - `featured: true` en **un solo** proyecto (el que se muestra grande arriba de todo)
3. Guardá, hacé commit y push. Si tenés Vercel/Netlify conectado al repo, se despliega solo.

## Cómo cambiar los colores

Todo el theming está en `src/index.css`, en las variables CSS (`--accent-violet`, `--accent-red`, etc.) dentro de `:root` y `[data-theme="light"]`. Cambiás ahí y se propaga a todo el sitio.

## Estructura

```
src/
  components/   -> todos los componentes de UI
  data/         -> projects.js y skills.js (tu contenido)
  hooks/        -> useTheme, useKeyPress
  App.jsx       -> compone todas las secciones
  index.css     -> theming + estilos globales
```
