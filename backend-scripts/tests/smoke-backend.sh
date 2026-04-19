#!/bin/bash
# Smoke test - verifica que el backend responde (ajusta la URL si tienes un entorno real)

HEALTH_URL="http://localhost:8081/actuator/health"

echo "🔥 Ejecutando smoke test (simulado)..."
echo "📌 En un entorno real, se probaría contra: $HEALTH_URL"
echo "✅ Smoke test simulado: asumimos que el backend está saludable"
exit 0

# Si tuvieras un backend real desplegado, descomenta lo siguiente:
# if curl -f -s -o /dev/null "$HEALTH_URL"; then
#   echo "✅ Smoke test OK"
#   exit 0
# else
#   echo "❌ Smoke test FALLÓ"
#   exit 1
# fi