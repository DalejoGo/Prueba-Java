import { Injectable } from '@angular/core'; // Importa Injectable de Angular
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Observable } from 'rxjs'; // Importa Observable de RxJS

@Injectable({
  providedIn: 'root' // Proporciona el servicio en la raíz de la aplicación
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; // URL del backend para usuarios
  private rolApiUrl = 'http://localhost:8080/api/roles'; // URL para obtener roles

  constructor(private http: HttpClient) { } // Inyecta HttpClient en el constructor

  // Obtener todos los usuarios
  getUsuarios(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`); // Realiza una solicitud GET para obtener usuarios con paginación
  }

  // Obtener todos los roles
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.rolApiUrl); // Realiza una solicitud GET para obtener todos los roles
  }

  // Crear un usuario
  crearUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario); // Realiza una solicitud POST para crear un nuevo usuario
  }

  // Actualizar un usuario
  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario); // Realiza una solicitud PUT para actualizar un usuario existente
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); // Realiza una solicitud DELETE para eliminar un usuario
  }
}