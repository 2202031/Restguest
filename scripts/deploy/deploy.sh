#!/bin/bash

ENVIRONMENT=$1

if [ -z "$ENVIRONMENT" ]; then
    echo "Error: especifica entorno (staging/production)"
    exit 1
fi

echo "Desplegando RestGuest en entorno: $ENVIRONMENT"

echo "Deteniendo version anterior..."
docker compose down

echo "Construyendo imagenes..."
docker compose build

echo "Levantando nueva version..."
docker compose up -d

echo "Esperando servicios..."
sleep 25

echo "Verificando backend..."
curl -f http://localhost:8081/api/auth/test || {
    echo "Health check fallo"
    docker compose down
    exit 1
}

echo "Despliegue completado correctamente en $ENVIRONMENT"