package aplicacionpino.demo.controller;

import aplicacionpino.demo.dto.LoginRequest;
import aplicacionpino.demo.dto.RegisterRequest;
import aplicacionpino.demo.model.User;
import aplicacionpino.demo.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    // Inyección de dependencias por constructor
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword()); // El servicio se encargará de hashearla
        user.setEmail(request.getEmail());
        
        User registeredUser = authService.register(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        String jwtToken = authService.login(request.getUsername(), request.getPassword());
        return ResponseEntity.ok(jwtToken);
    }

    // Opcional: Endpoint para logout (registrar en logs)
    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        // Lógica para registrar logout (depende de tu implementación)
        return ResponseEntity.ok("Sesión cerrada");
    }
    
    @GetMapping("/test")
public String test() {
    return "¡Endpoint de prueba funciona!";
}
}