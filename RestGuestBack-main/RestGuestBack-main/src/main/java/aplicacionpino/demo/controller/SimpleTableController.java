package aplicacionpino.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class SimpleTableController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/tables-simple")
    public String showTables() {
        try {
            String sql = "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
            List<Map<String, Object>> tables = jdbcTemplate.queryForList(sql);
            
            StringBuilder result = new StringBuilder();
            result.append("📊 TABLAS EN LA BASE DE DATOS:\n\n");
            
            for (Map<String, Object> table : tables) {
                result.append("📁 ").append(table.get("TABLE_NAME")).append("\n");
            }
            
            return result.toString();
            
        } catch (Exception e) {
            return "❌ Error: " + e.getMessage();
        }
    }

    @GetMapping("/health")
    public String health() {
        return "✅ Aplicación funcionando";
    }

    @GetMapping("/database/diagnostic")
    public Map<String, Object> diagnostic() {
        try {
            // 1. Verificar conexión básica
            String testSql = "SELECT 1 as test";
            Integer testResult = jdbcTemplate.queryForObject(testSql, Integer.class);
            
            // 2. Verificar todas las tablas
            String tablesSql = "SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'";
            List<Map<String, Object>> tables = jdbcTemplate.queryForList(tablesSql);
            
            // 3. Verificar estructura específica de la tabla users
            String structureSql = "SELECT COLUMN_NAME, DATA_TYPE, IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'users'";
            List<Map<String, Object>> columns = jdbcTemplate.queryForList(structureSql);
            
            // 4. Verificar si hay datos en users
            String countSql = "SELECT COUNT(*) as user_count FROM users";
            Integer userCount = jdbcTemplate.queryForObject(countSql, Integer.class);
            
            // 5. Ver datos de usuarios (si existen)
            List<Map<String, Object>> usersData = List.of();
            if (userCount > 0) {
                String usersSql = "SELECT TOP 5 id, username, email, role FROM users ORDER BY id";
                usersData = jdbcTemplate.queryForList(usersSql);
            }
            
            return Map.of(
                "connection", "SUCCESS",
                "testResult", testResult,
                "totalTables", tables.size(),
                "tables", tables,
                "usersTableColumns", columns,
                "totalUsers", userCount,
                "sampleUsers", usersData,
                "message", "Diagnóstico completado"
            );
            
        } catch (Exception e) {
            return Map.of(
                "connection", "FAILED", 
                "error", e.getMessage(),
                "errorType", e.getClass().getSimpleName()
            );
        }
    }

    @GetMapping("/users/data")
    public List<Map<String, Object>> getUsersData() {
        try {
            String sql = "SELECT id, username, email, role FROM users ORDER BY id";
            return jdbcTemplate.queryForList(sql);
        } catch (Exception e) {
            return List.of(Map.of("error", e.getMessage()));
        }
    }
}