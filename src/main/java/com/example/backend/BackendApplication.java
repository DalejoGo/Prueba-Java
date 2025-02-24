package com.example.backend; // Define el paquete al que pertenece esta clase

import org.springframework.boot.SpringApplication; // Importa SpringApplication de Spring Boot
import org.springframework.boot.autoconfigure.SpringBootApplication; // Importa SpringBootApplication de Spring Boot
import org.springframework.context.annotation.Bean; // Importa Bean de Spring
import org.springframework.web.servlet.config.annotation.CorsRegistry; // Importa CorsRegistry de Spring MVC
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; // Importa WebMvcConfigurer de Spring MVC

@SpringBootApplication // Indica que esta es una aplicación Spring Boot
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args); // Inicia la aplicación Spring Boot
    }

    // Configuración global de CORS
    @Bean // Define un bean de configuración
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(@SuppressWarnings("null") CorsRegistry registry) {
                registry.addMapping("/**")  // Permitir todas las rutas
                        .allowedOrigins("http://localhost:4200")  // Permitir llamadas desde el frontend
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
                        .allowedHeaders("*"); // Permitir todos los headers
            }
        };
    }
}
