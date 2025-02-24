import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Importa funciones y tipos necesarios de Angular
import { provideRouter } from '@angular/router'; // Importa la función para proporcionar enrutamiento
import { routes } from './app.routes'; // Importa las rutas de la aplicación
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'; // Importa funciones para la hidratación del cliente y la reproducción de eventos
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importa funciones para proporcionar HttpClient y fetch

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Proporciona la detección de cambios de zona con agrupación de eventos
    provideRouter(routes), // Proporciona el enrutador con las rutas de la aplicación
    provideClientHydration(withEventReplay()), // Proporciona la hidratación del cliente con reproducción de eventos
    provideHttpClient(withFetch()) // Proporciona HttpClient con fetch
  ]
};
