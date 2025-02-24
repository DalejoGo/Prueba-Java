import { Component, OnInit } from '@angular/core'; // Importa las clases necesarias de Angular
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule
import { UsuarioService } from '../../services/usuario.service'; // Importa el servicio de usuarios
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP

@Component({
  selector: 'app-usuarios', // Define el selector del componente
  templateUrl: './usuarios.component.html', // Define la plantilla HTML del componente
  styleUrls: ['./usuarios.component.css'], // Define los estilos CSS del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule, FormsModule] // Importa los módulos necesarios
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = []; // Array para almacenar los usuarios
  usuario = { 
    id: null, 
    nombre: '', 
    apellido: '', 
    edad: null, 
    email: '', 
    foto: '', 
    tipoDocumento: '',
  }; // Objeto para almacenar los datos del usuario

  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda

  // Variables para paginación
  paginaActual: number = 0; // Página actual
  tamanoPagina: number = 5; // Tamaño de la página
  totalPaginas: number = 0; // Total de páginas

  constructor(private usuarioService: UsuarioService, private http: HttpClient) {} // Inyecta el servicio de usuarios y HttpClient

  ngOnInit(): void { // Método que se ejecuta al inicializar el componente
    this.obtenerUsuarios(); // Llama al método para obtener los usuarios
  }

  obtenerUsuarios(): void { // Método para obtener los usuarios
    this.usuarioService.getUsuarios(this.paginaActual, this.tamanoPagina).subscribe(
      (response) => { // Maneja la respuesta del servicio
        this.usuarios = response.content; // Asigna los usuarios obtenidos al array
        this.totalPaginas = response.totalPages; // Asigna el total de páginas
      },
      (error) => { // Maneja los errores del servicio
        console.error('Error al obtener usuarios', error); // Muestra el error en la consola
      }
    );
  }

  guardarUsuario(): void { // Método para guardar un usuario
    if (this.usuario.id) { // Verifica si el usuario tiene un ID (editar)
      this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
        this.obtenerUsuarios(); // Recarga la lista de usuarios
        this.usuario = { id: null, nombre: '', apellido: '', edad: null, email: '', foto: '', tipoDocumento: '' }; // Resetea el formulario
      });
    } else { // Si no tiene ID (crear)
      this.usuarioService.crearUsuario(this.usuario).subscribe((nuevoUsuario) => {
        this.obtenerUsuarios(); // Recarga la lista después de agregar
        this.usuario = { id: null, nombre: '', apellido: '', edad: null, email: '', foto: '', tipoDocumento: ''}; // Resetea el formulario
      });
    }
  }

  editarUsuario(usuario: any): void { // Método para editar un usuario
    this.usuario = { ...usuario }; // Copia los valores al formulario
  }

  eliminarUsuario(id: number): void { // Método para eliminar un usuario
    this.usuarioService.eliminarUsuario(id).subscribe(
      (response) => {
        console.log(response.mensaje); // Muestra el mensaje de respuesta
        this.usuarios = this.usuarios.filter(u => u.id !== id); // Actualiza la lista sin recargar
      },
      (error) => console.error('Error al eliminar usuario', error) // Maneja los errores del servicio
    );
  }

  buscarUsuarios(): void { // Método para buscar usuarios
    if (this.terminoBusqueda.trim() === '') { // Verifica si el campo de búsqueda está vacío
      this.obtenerUsuarios(); // Resetea la lista de usuarios
    } else {
      this.usuarios = this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) // Filtra los usuarios por el término de búsqueda
      );
    }
  }

  // Métodos de paginación
  siguientePagina(): void { // Método para ir a la siguiente página
    if (this.paginaActual < this.totalPaginas - 1) { // Verifica si no es la última página
      this.paginaActual++; // Incrementa la página actual
      this.obtenerUsuarios(); // Obtiene los usuarios de la nueva página
    }
  }

  paginaAnterior(): void { // Método para ir a la página anterior
    if (this.paginaActual > 0) { // Verifica si no es la primera página
      this.paginaActual--; // Decrementa la página actual
      this.obtenerUsuarios(); // Obtiene los usuarios de la nueva página
    }
  }
}
