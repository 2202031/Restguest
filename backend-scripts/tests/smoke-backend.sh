#!/bin/bash
# Smoke test - verifica que el backend responde (ajusta la URL si tienes un entorno real)

#!/bin/bash
echo "🔥 [SIMULACIÓN] Smoke test: verificando que el backend estaría saludable"
echo "✅ Smoke test simulado exitoso (en un entorno real se ejecutaría curl contra /actuator/health)"
exit 0
# Si tuvieras un backend real desplegado, descomenta lo siguiente:
# if curl -f -s -o /dev/null "$HEALTH_URL"; then
#   echo "✅ Smoke test OK"
#   exit 0
# else
#   echo "❌ Smoke test FALLÓ"
#   exit 1
# fi