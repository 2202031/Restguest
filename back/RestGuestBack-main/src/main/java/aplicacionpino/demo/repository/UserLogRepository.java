package aplicacionpino.demo.repository;

import aplicacionpino.demo.model.UserLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface UserLogRepository extends JpaRepository<UserLog, Integer> {

    // 1. Buscar logs por usuario
    List<UserLog> findByUser_Id(Long userId);

    // 2. Buscar logs por tipo de acción
    List<UserLog> findByAction(String action);

    // 3. Buscar logs en un rango de fechas
    List<UserLog> findByTimestampBetween(LocalDateTime start, LocalDateTime end);

    // 4. Buscar logs por usuario y acción
    List<UserLog> findByUser_IdAndAction(Integer userId, String action);

    // 5. Consulta personalizada para logs recientes
    @Query("SELECT ul FROM UserLog ul WHERE ul.user.id = :userId ORDER BY ul.timestamp DESC LIMIT :limit")
    List<UserLog> findRecentLogsByUser(@Param("userId") Integer userId, @Param("limit") int limit);

    // 6. Contar intentos fallidos de login recientes (útil para detectar ataques)
    @Query("SELECT COUNT(ul) FROM UserLog ul WHERE ul.user.id = :userId AND ul.action = 'LOGIN_FAILED' AND ul.timestamp >= :since")
    int countFailedLoginAttempts(@Param("userId") Integer userId, @Param("since") LocalDateTime since);

    // 7. Buscar logs por dirección IP (útil para análisis de seguridad)
    List<UserLog> findByDireccionIp(String ipAddress);
}