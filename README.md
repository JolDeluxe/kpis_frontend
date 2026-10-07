# KPI Jefaturas - Frontend

Aplicación frontend en React + Vite para el panel de visualización de KPI de Jefaturas, preparada para despliegue independiente en Netlify con proxy transparente hacia el backend.

## Requisitos
- Node.js >= 20
- npm >= 10

## Configuración Local
1. Copiar `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```

## Scripts disponibles
- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:5173` con proxy hacia el backend local (`http://localhost:3005/api`).
- `npm run build`: Genera las redirecciones para Netlify (`_redirects`) y compila la SPA a la carpeta `dist/`.
- `npm run preview`: Previsualiza la versión compilada de producción localmente.

## Despliegue en Netlify
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Variables de entorno en Netlify:**
  - `NETLIFY_API_PROXY_TARGET`: URL pública del Cloudflare Tunnel hacia el backend (ej: `https://api-kpi.tudominio.com`).
