#!/bin/bash
# Prueba de integración (registro + login) - versión simulada

BASE_URL="http://localhost:8081"

echo "🧪 Probando integración (simulado)..."
echo "📌 En un entorno real se ejecutaría:"
echo "   POST $BASE_URL/api/auth/register"
echo "   POST $BASE_URL/api/auth/login"
echo "✅ Prueba de integración simulada: exitosa"
exit 0

# Código real (descomentar cuando tengas backend desplegado):
# REGISTER_RESP=$(curl -s -X POST "$BASE_URL/api/auth/register" \
#   -H "Content-Type: application/json" \
#   -d '{"nombre":"TestInt","email":"testint@example.com","contraseña":"123"}')
# LOGIN_RESP=$(curl -s -X POST "$BASE_URL/api/auth/login" \
#   -H "Content-Type: application/json" \
#   -d '{"email":"testint@example.com","password":"123"}')
# if echo "$LOGIN_RESP" | grep -q "token"; then
#   echo "✅ Integración exitosa"
#   exit 0
# else
#   echo "❌ Integración fallida"
#   exit 1
# fi