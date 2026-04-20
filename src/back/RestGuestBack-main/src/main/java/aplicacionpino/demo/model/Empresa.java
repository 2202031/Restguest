package aplicacionpino.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;  // 👈 IMPORT necesario
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "empresas")
public class Empresa {

    @JsonIgnore   // 👈 AGREGAR ESTA LÍNEA AQUÍ
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @JsonIgnore   // 👈 AGREGAR ESTA LÍNEA AQUÍ
    @Column(length = 20)
    private String rfc;

    @JsonIgnore   // 👈 AGREGAR ESTA LÍNEA AQUÍ
    @Column(name = "creado_en")
    private LocalDateTime creadoEn;

    // Constructores
    public Empresa() {}

    // Getters y Setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getRfc() { return rfc; }
    public void setRfc(String rfc) { this.rfc = rfc; }
    public LocalDateTime getCreadoEn() { return creadoEn; }
    public void setCreadoEn(LocalDateTime creadoEn) { this.creadoEn = creadoEn; }
}