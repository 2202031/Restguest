package aplicacionpino.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(locations = "classpath:application.properties")
class DemoApplicationTests {

    @Test
    void contextLoads() {
        // Test básico - solo verifica que el contexto se carga
        System.out.println("Context loaded successfully");
    }
}