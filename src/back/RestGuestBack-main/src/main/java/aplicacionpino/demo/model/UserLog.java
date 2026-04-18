package aplicacionpino.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_logs") // Nombre exacto de tu tabla en MySQL
public class UserLog {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @ManyToOne
    @JoinColumn(name = "user_id") // Relación con la tabla users
    private User user;
    
    @Column(nullable = false, length = 50)
    private String action; // Ej: "LOGIN", "LOGOUT", "LOGIN_FAILED"
    
    @Column(name = "direccion_ip", length = 45)
    private String direccionIp;
    
    @Column(columnDefinition = "TEXT")
    private String agente; // User-Agent del navegador
    
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime timestamp;

    // Constructor vacío (requerido por JPA)
    public UserLog() {
    }

    // Constructor con campos esenciales
    public UserLog(User user, String action, String direccionIp, String agente) {
        this.user = user;
        this.action = action;
        this.direccionIp = direccionIp;
        this.agente = agente;
    }

    // Getters y Setters (generados automáticamente o manualmente)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getDireccionIp() {
        return direccionIp;
    }

    public void setDireccionIp(String direccionIp) {
        this.direccionIp = direccionIp;
    }

    public String getAgente() {
        return agente;
    }

    public void setAgente(String agente) {
        this.agente = agente;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    // Método toString() para logging/debugging
    @Override
    public String toString() {
        return "UserLog{" +
                "id=" + id +
                ", userId=" + (user != null ? user.getId() : null) +
                ", action='" + action + '\'' +
                ", direccionIp='" + direccionIp + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}