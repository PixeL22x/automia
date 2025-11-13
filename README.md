# Automia - Consultoría en Inteligencia Artificial

Landing page moderna para consultoría de IA dirigida a pequeñas empresas, construida con Next.js, React y JavaScript.

## 🚀 Características

- Diseño moderno y responsive
- Secciones completas: Hero, Servicios, Beneficios, Proceso, Testimonios y CTA
- Animaciones suaves y efectos visuales
- Optimizado para SEO
- Listo para producción

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

## 🏃 Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo en localhost:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📦 Construir para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
automia/
├── components/          # Componentes React
│   ├── Hero.js
│   ├── Services.js
│   ├── Benefits.js
│   ├── Process.js
│   ├── Testimonials.js
│   ├── CTA.js
│   ├── Footer.js
│   └── Navbar.js
├── pages/              # Páginas Next.js
│   ├── _app.js
│   └── index.js
├── styles/             # Estilos CSS
│   ├── globals.css
│   └── [component].module.css
├── public/             # Archivos estáticos
├── package.json
└── next.config.js
```

## 🎨 Personalización

Puedes personalizar los colores, textos y contenido editando:
- Variables CSS en `styles/globals.css`
- Contenido en los componentes de `components/`
- Información de contacto en `components/Footer.js` y `components/CTA.js`

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

