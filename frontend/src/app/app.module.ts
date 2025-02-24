import { NgModule } from '@angular/core'; // Importa NgModule de Angular
import { BrowserModule } from '@angular/platform-browser'; // Importa BrowserModule para aplicaciones web
import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios
import { CommonModule } from '@angular/common'; // Importa CommonModule para tener acceso a las directivas comunes de Angular

import { BusquedaComponent } from './components/busqueda/busqueda.component'; // Importa el componente de búsqueda
import { GaleriaComponent } from './components/galeria/galeria.component'; // Importa el componente de galería
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento de la aplicación

@NgModule({
  declarations: [
    AppComponent, // Declara el componente principal de la aplicación
    BusquedaComponent, // Declara el componente de búsqueda
    GaleriaComponent // Declara el componente de galería
  ],
  imports: [
    BrowserModule, // Importa BrowserModule para aplicaciones web
    FormsModule, // Importa FormsModule para trabajar con formularios
    CommonModule, // Importa CommonModule para tener acceso a las directivas comunes de Angular
    AppRoutingModule // Importa el módulo de enrutamiento de la aplicación
  ],
  providers: [], // Proveedores de servicios (vacío en este caso)
  bootstrap: [AppComponent] // Componente principal que se inicia al arrancar la aplicación
})
export class AppModule { } // Define y exporta la clase AppModule
