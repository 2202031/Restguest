package aplicacionpino.demo.security;

import aplicacionpino.demo.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.Collections;

public class CustomUserDetails implements UserDetails {
    private final User user;
    
    public CustomUserDetails(User user) {
        this.user = user;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Si tu User tiene roles, conviértelos aquí. Ejemplo básico:
        return Collections.emptyList(); 
        // Si tienes roles: return user.getRoles().stream().map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public String getPassword() {
        return user.getPassword(); // Debe devolver la contraseña hasheada
    }

    @Override
    public String getUsername() {
        return user.getUsername(); // O el campo que uses como identificador
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Cambia a false si implementas lógica de expiración
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Cambia a false para bloquear cuentas
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Útil para expiración de contraseñas
    }

    @Override
    public boolean isEnabled() {
        return user.isEnabled(); // Asume que tu User tiene un campo 'enabled'
    }
    
    // Método adicional para acceder al User original si lo necesitas
    public User getUser() {
        return user;
    }
}