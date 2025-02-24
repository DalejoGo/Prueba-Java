package com.example.backend.repository; // Define el paquete al que pertenece esta interfaz

import com.example.backend.model.Usuario; // Importa la clase Usuario
import org.springframework.data.jpa.repository.JpaRepository; // Importa JpaRepository de Spring Data JPA
import java.util.Optional; // Importa la clase Optional de Java

public interface UsuarioRepository extends JpaRepository<Usuario, Long> { // Define una interfaz que extiende JpaRepository para la entidad Usuario con clave primaria de tipo Long
    Optional<Usuario> findByEmail(String email); // Declara un método para encontrar un usuario por su email
}

