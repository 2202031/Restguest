#!/bin/bash

echo "🚀 Testing login..."

STATUS=$(curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:8080/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"1234"}')

if [ "$STATUS" -eq 200 ]; then
  echo "✅ Login OK"
else
  echo "❌ Login failed ($STATUS)"
  exit 1
fi