import { APP_BASE_HREF } from '@angular/common'; // Importa APP_BASE_HREF de Angular Common
import { CommonEngine, isMainModule } from '@angular/ssr/node'; // Importa CommonEngine e isMainModule de Angular SSR
import express from 'express'; // Importa express
import { dirname, join, resolve } from 'node:path'; // Importa funciones de manipulación de rutas de Node.js
import { fileURLToPath } from 'node:url'; // Importa fileURLToPath de Node.js para trabajar con URLs de archivos
import bootstrap from './main.server'; // Importa la función bootstrap desde main.server

const serverDistFolder = dirname(fileURLToPath(import.meta.url)); // Obtiene la carpeta de distribución del servidor
const browserDistFolder = resolve(serverDistFolder, '../browser'); // Resuelve la ruta a la carpeta de distribución del navegador
const indexHtml = join(serverDistFolder, 'index.server.html'); // Une la ruta para obtener el archivo index.server.html

const app = express(); // Crea una instancia de Express
const commonEngine = new CommonEngine(); // Crea una instancia de CommonEngine

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y', // Define el tiempo máximo de caché para los archivos estáticos
    index: 'index.html' // Define el archivo index.html como el archivo predeterminado
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req; // Desestructura las propiedades del objeto de solicitud

  commonEngine
    .render({
      bootstrap, // Define la función bootstrap
      documentFilePath: indexHtml, // Define la ruta del archivo HTML del documento
      url: `${protocol}://${headers.host}${originalUrl}`, // Construye la URL completa de la solicitud
      publicPath: browserDistFolder, // Define la ruta pública para los archivos estáticos
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }], // Proporciona APP_BASE_HREF con el valor de baseUrl
    })
    .then((html) => res.send(html)) // Envía el HTML renderizado como respuesta
    .catch((err) => next(err)); // Maneja errores y los pasa al siguiente middleware
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) { // Verifica si este módulo es el punto de entrada principal
  const port = process.env['PORT'] || 4000; // Define el puerto del servidor
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`); // Muestra un mensaje en la consola cuando el servidor está escuchando
  });
}

export default app; // Exporta la instancia de la aplicación Express como predeterminada
