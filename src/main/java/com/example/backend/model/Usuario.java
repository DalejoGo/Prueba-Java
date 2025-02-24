package com.example.backend.model; // Define el paquete al que pertenece esta clase

import jakarta.persistence.*; // Importa las anotaciones y clases necesarias para JPA

@Entity // Indica que esta clase es una entidad JPA
@Table(name = "usuarios") // Especifica la tabla de la base de datos a la que se mapea esta entidad
public class Usuario {
    @Id // Indica que este campo es la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Especifica la estrategia de generación de la clave primaria
    private Long id; // Campo para el ID del usuario
    
    private String nombre; // Campo para el nombre del usuario
    private String apellido; // Campo para el apellido del usuario
    private int edad; // Campo para la edad del usuario
    private String email; // Campo para el email del usuario
    private String foto; // Campo para la foto del usuario
    private String tipoDocumento; // Campo para el tipo de documento del usuario

    @ManyToOne // Indica una relación muchos a uno con la entidad Rol
    @JoinColumn(name = "rol_id") // Especifica la columna de la clave foránea en la tabla de usuarios
    private Rol rol; // Campo para el rol del usuario

    // Getters y Setters
    public Long getId() { return id; } // Getter para el ID
    public void setId(Long id) { this.id = id; } // Setter para el ID

    public String getNombre() { return nombre; } // Getter para el nombre
    public void setNombre(String nombre) { this.nombre = nombre; } // Setter para el nombre

    public String getApellido() { return apellido; } // Getter para el apellido
    public void setApellido(String apellido) { this.apellido = apellido; } // Setter para el apellido

    public int getEdad() { return edad; } // Getter para la edad
    public void setEdad(int edad) { this.edad = edad; } // Setter para la edad

    public String getEmail() { return email; } // Getter para el email
    public void setEmail(String email) { this.email = email; } // Setter para el email

    public String getFoto() { return foto; } // Getter para la foto
    public void setFoto(String foto) { this.foto = foto; } // Setter para la foto

    public String getTipoDocumento() { return tipoDocumento; } // Getter para el tipo de documento
    public void setTipoDocumento(String tipoDocumento) { this.tipoDocumento = tipoDocumento; } // Setter para el tipo de documento

    public Rol getRol() { return rol; } // Getter para el rol
    public void setRol(Rol rol) { this.rol = rol; } // Setter para el rol
}
