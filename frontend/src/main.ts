import { bootstrapApplication } from '@angular/platform-browser'; // Importa bootstrapApplication de Angular para iniciar la aplicación
import { AppComponent } from './app/app.component'; // Importa el componente principal de la aplicación
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient para proporcionar HttpClient

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Proporciona HttpClient como proveedor
})
  .catch(err => console.error(err)); // Maneja errores en caso de que falle el inicio de la aplicación