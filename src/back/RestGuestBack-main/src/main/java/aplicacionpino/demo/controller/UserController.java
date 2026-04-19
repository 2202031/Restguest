package aplicacionpino.demo.controller;

import aplicacionpino.demo.model.User;
import aplicacionpino.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Obtener TODOS los usuarios
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Obtener usuario por ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        Optional<User> user = userRepository.findById(id);
        return user.map(ResponseEntity::ok)
                  .orElse(ResponseEntity.notFound().build());
    }

    // Obtener usuario por username
    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userRepository.findByEmail(email);
        return user.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Contar total de usuarios
    @GetMapping("/count")
    public String countUsers() {
        Long count = userRepository.count();
        return "Total de usuarios en la base de datos: " + count;
    }
}