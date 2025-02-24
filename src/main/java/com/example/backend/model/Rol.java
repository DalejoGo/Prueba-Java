package com.example.backend.model; // Define el paquete al que pertenece esta clase

import jakarta.persistence.*; // Importa las anotaciones y clases necesarias para JPA
import java.util.List; // Importa la clase List de Java

@Entity // Indica que esta clase es una entidad JPA
@Table(name = "roles") // Especifica la tabla de la base de datos a la que se mapea esta entidad
public class Rol {
    @Id // Indica que este campo es la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Especifica la estrategia de generación de la clave primaria
    private Long id; // Campo para el ID del rol

    private String nombre; // Campo para el nombre del rol (Ejemplo: "Administrador", "Comprador")

    @OneToMany(mappedBy = "rol") // Indica una relación uno a muchos con la entidad Usuario
    private List<Usuario> usuarios; // Lista de usuarios que tienen este rol

    // Getters y Setters
    public Long getId() { return id; } // Getter para el ID
    public void setId(Long id) { this.id = id; } // Setter para el ID

    public String getNombre() { return nombre; } // Getter para el nombre
    public void setNombre(String nombre) { this.nombre = nombre; } // Setter para el nombre

    public List<Usuario> getUsuarios() { return usuarios; } // Getter para la lista de usuarios
    public void setUsuarios(List<Usuario> usuarios) { this.usuarios = usuarios; } // Setter para la lista de usuarios
}
