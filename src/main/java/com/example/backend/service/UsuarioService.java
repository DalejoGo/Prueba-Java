package com.example.backend.service; // Define el paquete al que pertenece esta clase

import com.example.backend.model.Usuario; // Importa la clase Usuario
import com.example.backend.repository.UsuarioRepository; // Importa la interfaz UsuarioRepository
import org.springframework.beans.factory.annotation.Autowired; // Importa la anotación Autowired de Spring
import org.springframework.stereotype.Service; // Importa la anotación Service de Spring

import java.util.List; // Importa la clase List de Java
import java.util.Optional; // Importa la clase Optional de Java
import org.springframework.data.domain.Page; // Importa la clase Page de Spring Data
import org.springframework.data.domain.Pageable; // Importa la clase Pageable de Spring Data

@Service // Indica que esta clase es un servicio de Spring
public class UsuarioService {
    @Autowired // Inyecta una instancia de UsuarioRepository
    private UsuarioRepository usuarioRepository;

    // Obtener todos los usuarios
    public List<Usuario> obtenerUsuarios() {
        return usuarioRepository.findAll(); // Retorna una lista de todos los usuarios
    }

    // Obtener un usuario por ID
    public Optional<Usuario> obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id); // Retorna un Optional con el usuario si existe
    }

    // Crear o actualizar un usuario
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario); // Guarda el usuario y retorna la entidad guardada
    }

    // Eliminar un usuario
    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id); // Elimina el usuario por ID
    }

    // Obtener usuarios con paginación
    public Page<Usuario> obtenerUsuariosPaginados(Pageable pageable) {
        return usuarioRepository.findAll(pageable); // Retorna una página de usuarios
    }

    // ✅ Método para verificar si un email ya existe
    public boolean existeEmail(String email) {
        return usuarioRepository.findByEmail(email).isPresent(); // Retorna true si el email ya existe
    }
}
