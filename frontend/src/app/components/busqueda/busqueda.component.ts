import { Component, EventEmitter, Output } from '@angular/core'; // Importa las clases necesarias de Angular
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP

@Component({
  selector: 'app-busqueda', // Define el selector del componente
  templateUrl: './busqueda.component.html', // Define la plantilla HTML del componente
  styleUrls: ['./busqueda.component.css'], // Define los estilos CSS del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, FormsModule] // Importa los módulos necesarios
})
export class BusquedaComponent {
  @Output() buscar = new EventEmitter<any[]>(); // Emitir imágenes
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda
  categoriaSeleccionada: string = ''; // Nueva variable para el dropdown
  apiKey: string = '48989135-8e3b757b2b280a8247788cce6'; // Clave de API para Pixabay
  imagenes: any[] = []; // Array para almacenar las imágenes obtenidas

  categorias = ['science', 'education', 'people', 'feelings', 'computer', 'buildings']; // Opciones del dropdown

  constructor(private http: HttpClient) {} // Inyecta HttpClient en el constructor

  buscarImagenes() {
    let termino = this.terminoBusqueda.trim() || this.categoriaSeleccionada; // Si no hay texto, usa la categoría seleccionada
    if (termino !== '') { // Verifica que el término no esté vacío
      const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${encodeURIComponent(termino)}&image_type=photo`; // Construye la URL de la API

      this.http.get<any>(url).subscribe(
        (response) => { // Maneja la respuesta de la API
          this.imagenes = response.hits; // Asigna las imágenes obtenidas al array
          this.buscar.emit(this.imagenes); // Emite las imágenes obtenidas
        },
        (error) => { // Maneja los errores de la API
          console.error('Error al buscar imágenes:', error); // Muestra el error en la consola
        }
      );
    }
  }
}
