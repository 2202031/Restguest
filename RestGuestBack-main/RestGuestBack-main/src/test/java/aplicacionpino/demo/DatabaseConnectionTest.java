package aplicacionpino.demo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.ResultSet;

@SpringBootTest
public class DatabaseConnectionTest {

    @Autowired
    private DataSource dataSource;

    @Test
    public void testAzureSqlConnection() {
        System.out.println("🧪 Probando conexión a Azure SQL...");
        
        try (Connection conn = dataSource.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT DB_NAME() as db, @@VERSION as version, CURRENT_USER as user")) {
            
            if (rs.next()) {
                System.out.println("✅ CONEXIÓN EXITOSA!");
                System.out.println("📁 Database: " + rs.getString("db"));
                System.out.println("👤 User: " + rs.getString("user"));
                System.out.println("🔧 Version: " + rs.getString("version").split("\n")[0]);
            }
            
        } catch (Exception e) {
            System.out.println("❌ ERROR: " + e.getMessage());
            e.printStackTrace();
        }
    }
}