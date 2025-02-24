import { Injectable } from '@angular/core'; // Importa Injectable de Angular
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar solicitudes HTTP
import { Observable } from 'rxjs'; // Importa Observable de RxJS

@Injectable({
  providedIn: 'root' // Proporciona el servicio en la raíz de la aplicación
})
export class PixabayService {
  private apiUrl = 'https://pixabay.com/api/'; // URL base de la API de Pixabay
  private apiKey = '48989135-8e3b757b2b280a8247788cce6'; // Clave de API para Pixabay

  constructor(private http: HttpClient) {} // Inyecta HttpClient en el constructor

  // Método para buscar imágenes con un término y categoría opcional
  buscarImagenes(termino: string, categoria: string = ''): Observable<any> {
    let url = `${this.apiUrl}?key=${this.apiKey}&q=${encodeURIComponent(termino)}&image_type=photo`; // Construye la URL de la API
    if (categoria) {
      url += `&category=${categoria}`; // Añade la categoría a la URL si está presente
    }
    return this.http.get(url); // Realiza la solicitud HTTP y devuelve un Observable
  }
}
