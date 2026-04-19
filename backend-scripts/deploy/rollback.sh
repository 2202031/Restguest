#!/bin/bash
# Rollback simulado a versión anterior

BACKUP_DIR="./backups"
PROD_DIR="./deployments/production"

echo "🔄 [SIMULACIÓN] Revirtiendo a versión anterior"
if [ -f "$BACKUP_DIR/restguest-backend-prev.jar" ]; then
  cp $BACKUP_DIR/restguest-backend-prev.jar $PROD_DIR/restguest-backend-prod.jar
  echo "✅ Rollback completado (simulado)"
else
  echo "⚠️  No se encontró backup previo. Creando backup simulado del actual..."
  mkdir -p $BACKUP_DIR
  if [ -f "$PROD_DIR/restguest-backend-prod.jar" ]; then
    cp $PROD_DIR/restguest-backend-prod.jar $BACKUP_DIR/restguest-backend-prev.jar
    echo "Backup creado. Ejecute de nuevo el script."
  else
    echo "❌ No hay versión desplegada para hacer rollback."
    exit 1
  fi
fi
echo ""
echo "📌 En un entorno real: se restauraría el JAR anterior y reiniciaría el servicio."