#!/bin/bash
# Despliegue simulado a STAGING

JAR_FILE=$1
STAGING_SIM_DIR="./deployments/staging"

if [ -z "$JAR_FILE" ]; then
  echo "❌ Uso: $0 <ruta-del-jar>"
  exit 1
fi

echo "🔧 [SIMULACIÓN] Iniciando despliegue a STAGING"
mkdir -p $STAGING_SIM_DIR
cp $JAR_FILE $STAGING_SIM_DIR/restguest-backend-staging.jar
echo "✅ [SIMULACIÓN] JAR copiado a $STAGING_SIM_DIR"
echo ""
echo "📌 Comandos que se ejecutarían en un entorno real:"
echo "   scp $JAR_FILE usuario@staging-server:/opt/restguest/"
echo "   ssh usuario@staging-server 'sudo systemctl restart restguest'"
echo "   curl -X POST https://staging-server/health"
exit 0