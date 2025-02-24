import { Component } from '@angular/core'; // Importa Component de Angular
import { CommonModule } from '@angular/common'; // Importa CommonModule de Angular
import { BusquedaComponent } from './components/busqueda/busqueda.component'; // Importa el componente de búsqueda
import { GaleriaComponent } from './components/galeria/galeria.component'; // Importa el componente de galería
import { UsuariosComponent } from './components/usuarios/usuarios.component'; // Importa el componente de usuarios
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para realizar solicitudes HTTP

@Component({
  selector: 'app-root', // Define el selector del componente
  templateUrl: './app.component.html', // Define la plantilla HTML del componente
  styleUrls: ['./app.component.css'], // Define los estilos CSS del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, HttpClientModule, BusquedaComponent, GaleriaComponent, UsuariosComponent] // Importa los módulos y componentes necesarios
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  imagenes: any[] = []; // Array para almacenar las imágenes

  actualizarImagenes(nuevasImagenes: any[]) { // Método para actualizar las imágenes
    this.imagenes = nuevasImagenes; // Actualiza el array de imágenes con las nuevas imágenes
  }
}
