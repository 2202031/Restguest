package aplicacionpino.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class SimpleDbController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/db/test")
    public String testConnection() {
        try {
            Integer result = jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return "✅ Conexión a BD exitosa. Resultado: " + result;
        } catch (Exception e) {
            return "❌ Error de BD: " + e.getMessage();
        }
    }

    @GetMapping("/db/info")
    public Map<String, Object> getDbInfo() {
        try {
            String version = jdbcTemplate.queryForObject("SELECT @@VERSION", String.class);
            String dbName = jdbcTemplate.queryForObject("SELECT DB_NAME()", String.class);
            
            return Map.of(
                "database", dbName,
                "version", version.split("\n")[0],
                "status", "CONNECTED",
                "message", "✅ Conectado a Azure SQL Database"
            );
        } catch (Exception e) {
            return Map.of("status", "ERROR", "error", e.getMessage());
        }
    }

    @GetMapping("/db/users")
    public List<Map<String, Object>> getUsers() {
        try {
            String sql = "SELECT * FROM users";
            return jdbcTemplate.queryForList(sql);
        } catch (Exception e) {
            return List.of(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/db/tables")
    public List<Map<String, Object>> getTables() {
        String sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
        return jdbcTemplate.queryForList(sql);
    }

    // ELIMINAR el método /health o cambiar a /db/health
    // @GetMapping("/health")  ← QUITAR esta línea
}