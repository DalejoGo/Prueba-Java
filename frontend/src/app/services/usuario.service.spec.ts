import { TestBed } from '@angular/core/testing'; // Importa TestBed para configurar el entorno de pruebas

import { UsuarioService } from './usuario.service'; // Importa el servicio a probar

describe('UsuarioService', () => { // Describe el conjunto de pruebas para el servicio UsuarioService
  let service: UsuarioService; // Declara una variable para el servicio

  beforeEach(() => { // beforeEach se ejecuta antes de cada prueba
    TestBed.configureTestingModule({}); // Configura el módulo de pruebas
    service = TestBed.inject(UsuarioService); // Inyecta el servicio a probar
  });

  it('should be created', () => { // Define una prueba que verifica si el servicio se crea correctamente
    expect(service).toBeTruthy(); // Verifica que el servicio sea verdadero (exista)
  });
});
