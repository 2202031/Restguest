#!/bin/bash
# Despliegue simulado a PRODUCCIÓN (con opción --auto para CI)

JAR_FILE=$1
AUTO_MODE=$2
PROD_SIM_DIR="./deployments/production"

if [ -z "$JAR_FILE" ]; then
  echo "❌ Uso: $0 <ruta-del-jar> [--auto]"
  exit 1
fi

if [ "$AUTO_MODE" != "--auto" ]; then
  echo "⚠️  [SIMULACIÓN] Despliegue a PRODUCCIÓN requiere confirmación"
  read -p "¿Escribir 'yes' para continuar? " confirm
  if [ "$confirm" != "yes" ]; then
    echo "Despliegue cancelado."
    exit 1
  fi
else
  echo "🤖 Modo automático (CI) - simulando despliegue sin interacción"
fi

mkdir -p $PROD_SIM_DIR
cp $JAR_FILE $PROD_SIM_DIR/restguest-backend-prod.jar
echo "✅ [SIMULACIÓN] JAR desplegado en $PROD_SIM_DIR"
echo ""
echo "📌 En entorno real se ejecutaría:"
echo "   scp $JAR_FILE usuario@prod-server:/opt/restguest/"
echo "   ssh usuario@prod-server 'sudo systemctl restart restguest'"
echo "   # Después, verificar health: curl https://api.restguest.com/actuator/health"
exit 0