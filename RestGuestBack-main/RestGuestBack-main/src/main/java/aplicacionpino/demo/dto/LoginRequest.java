package aplicacionpino.demo.dto;

import jakarta.validation.constraints.NotBlank;


public class LoginRequest {
    @NotBlank(message = "El username es obligatorio")
    private String username;

    @NotBlank(message = "La contraseña es obligatoria")
    private String password;

    // Constructor vacío (necesario para Spring)
    public LoginRequest() {}

    // Constructor con campos
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getters y Setters (obligatorios para Spring/Jackson)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
