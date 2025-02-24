import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'; // Importa funciones y tipos necesarios de Angular
import { provideServerRendering } from '@angular/platform-server'; // Importa la función para proporcionar renderizado en el servidor
import { appConfig } from './app.config'; // Importa la configuración de la aplicación

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), // Proporciona el renderizado en el servidor
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig); // Fusiona la configuración de la aplicación con la configuración del servidor
