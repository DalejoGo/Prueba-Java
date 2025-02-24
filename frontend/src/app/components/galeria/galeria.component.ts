import { Component, Input } from '@angular/core'; // Importa las clases necesarias de Angular
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule

@Component({
  selector: 'app-galeria', // Define el selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule], // Importa los módulos necesarios
  templateUrl: './galeria.component.html', // Define la plantilla HTML del componente
  styleUrls: ['./galeria.component.css'] // Define los estilos CSS del componente
})
export class GaleriaComponent {
  @Input() imagenes: any[] = []; // Recibe un array de imágenes como entrada
  imagenSeleccionada: any = null; // Variable para almacenar la imagen seleccionada

  abrirModal(imagen: any): void { // Método para abrir el modal con la imagen seleccionada
    this.imagenSeleccionada = imagen; // Asigna la imagen seleccionada a la variable
  }

  cerrarModal(): void { // Método para cerrar el modal
    this.imagenSeleccionada = null; // Limpia la variable de la imagen seleccionada
  }
}
