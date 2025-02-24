package com.example.backend.controller;

import com.example.backend.model.Usuario;
import com.example.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController // Indica que esta clase es un controlador REST
@RequestMapping("/api/usuarios") // Define la ruta base para las solicitudes de este controlador
public class UsuarioController {

    @Autowired // Inyecta una instancia de UsuarioService
    private UsuarioService usuarioService;

    // ✅ Obtener todos los usuarios (GET) con paginación
    @GetMapping
    public ResponseEntity<Page<Usuario>> obtenerUsuarios(Pageable pageable) {
        Page<Usuario> usuarios = usuarioService.obtenerUsuariosPaginados(pageable); // Obtiene los usuarios paginados
        return ResponseEntity.ok(usuarios); // Retorna los usuarios en la respuesta
    }

    // ✅ Obtener un usuario por ID (GET)
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.obtenerUsuarioPorId(id); // Obtiene el usuario por ID
        return usuario.map(ResponseEntity::ok) // Si el usuario existe, retorna el usuario
                      .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null)); // Si no existe, retorna 404
    }

    // ✅ Crear un usuario (POST) con validación y control de duplicados
    @PostMapping
    public ResponseEntity<?> crearUsuario(@Valid @RequestBody Usuario usuario) {
        if (usuarioService.existeEmail(usuario.getEmail())) { // Verifica si el email ya está en uso
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El email ya está en uso"); // Retorna 409 si el email está en uso
        }

        Usuario nuevoUsuario = usuarioService.guardarUsuario(usuario); // Guarda el nuevo usuario
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoUsuario); // Retorna 201 con el usuario creado
    }

    // ✅ Actualizar un usuario por ID (PUT)
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @Valid @RequestBody Usuario usuarioActualizado) {
        Optional<Usuario> usuarioExistente = usuarioService.obtenerUsuarioPorId(id); // Obtiene el usuario por ID

        if (usuarioExistente.isPresent()) { // Si el usuario existe
            Usuario usuario = usuarioExistente.get();
            usuario.setNombre(usuarioActualizado.getNombre()); // Actualiza el nombre
            usuario.setApellido(usuarioActualizado.getApellido()); // Actualiza el apellido
            usuario.setEdad(usuarioActualizado.getEdad()); // Actualiza la edad
            usuario.setEmail(usuarioActualizado.getEmail()); // Actualiza el email
            usuario.setFoto(usuarioActualizado.getFoto()); // Actualiza la foto
            usuario.setTipoDocumento(usuarioActualizado.getTipoDocumento()); // Actualiza el tipo de documento
         
            Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario); // Guarda el usuario actualizado
            return ResponseEntity.ok(usuarioGuardado); // Retorna el usuario actualizado
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Retorna 404 si el usuario no existe
        }
    }

    // ✅ Eliminar un usuario por ID (DELETE)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminarUsuario(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.obtenerUsuarioPorId(id); // Obtiene el usuario por ID

        if (usuario.isPresent()) { // Si el usuario existe
            usuarioService.eliminarUsuario(id); // Elimina el usuario
            return ResponseEntity.ok("Usuario eliminado correctamente"); // Retorna un mensaje de éxito
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado"); // Retorna 404 si el usuario no existe
        }
    }
}
