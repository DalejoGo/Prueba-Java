import { bootstrapApplication } from '@angular/platform-browser'; // Importa bootstrapApplication de Angular para iniciar la aplicación
import { AppComponent } from './app/app.component'; // Importa el componente principal de la aplicación
import { config } from './app/app.config.server'; // Importa la configuración del servidor

const bootstrap = () => bootstrapApplication(AppComponent, config); // Define una función para iniciar la aplicación con la configuración del servidor

export default bootstrap; // Exporta la función bootstrap como predeterminada
