import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las clases necesarias para las pruebas

import { GaleriaComponent } from './galeria.component'; // Importa el componente a probar

describe('GaleriaComponent', () => { // Describe el conjunto de pruebas para el componente GaleriaComponent
  let component: GaleriaComponent; // Declara una variable para el componente
  let fixture: ComponentFixture<GaleriaComponent>; // Declara una variable para el fixture del componente

  beforeEach(async () => { // beforeEach se ejecuta antes de cada prueba
    await TestBed.configureTestingModule({ // Configura el módulo de pruebas
      imports: [GaleriaComponent] // Importa el componente a probar
    })
    .compileComponents(); // Compila los componentes

    fixture = TestBed.createComponent(GaleriaComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Asigna la instancia del componente a la variable
    fixture.detectChanges(); // Detecta los cambios en el componente
  });

  it('should create', () => { // Define una prueba que verifica si el componente se crea correctamente
    expect(component).toBeTruthy(); // Verifica que el componente sea verdadero (exista)
  });
});
