import { TestBed } from '@angular/core/testing'; // Importa TestBed para configurar el entorno de pruebas
import { AppComponent } from './app.component'; // Importa el componente a probar

describe('AppComponent', () => { // Describe el conjunto de pruebas para el componente AppComponent
  beforeEach(async () => { // beforeEach se ejecuta antes de cada prueba
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el componente a probar
    }).compileComponents(); // Compila los componentes
  });

  it('should create the app', () => { // Define una prueba que verifica si el componente se crea correctamente
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Asigna la instancia del componente a la variable
    expect(app).toBeTruthy(); // Verifica que el componente sea verdadero (exista)
  });

  it(`should have the 'frontend' title`, () => { // Define una prueba que verifica si el título del componente es 'frontend'
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Asigna la instancia del componente a la variable
    expect(app.title).toEqual('Prueba java');
  });

  it('should render title', () => { // Define una prueba que verifica si el título se renderiza correctamente
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    fixture.detectChanges(); // Detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el elemento nativo del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, frontend'); // Verifica que el título renderizado contenga 'Hello, frontend'
  });
});
