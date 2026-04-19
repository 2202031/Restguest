package aplicacionpino.demo.service;

import aplicacionpino.demo.model.User;
import aplicacionpino.demo.repository.UserRepository;
import aplicacionpino.demo.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthService(
        UserRepository userRepository,
        PasswordEncoder passwordEncoder,
        JwtService jwtService,
        AuthenticationManager authenticationManager
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public User register(User user) {
        if (!StringUtils.hasText(user.getContraseña())) {  // 👈 Cambiado a getContraseña()
            throw new IllegalArgumentException("La contraseña no puede estar vacía");
        }
        user.setContraseña(passwordEncoder.encode(user.getContraseña()));  // 👈 Cambiado a setContraseña()
        return userRepository.save(user);
    }

    public String login(String email, String password) {  // 👈 El parámetro es email, no username
        // Authenticate using Spring Security's AuthenticationManager
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(email, password)  // 👈 email como username
        );
        
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return jwtService.generateToken(userDetails);
    }
}