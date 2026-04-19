# RestGuest – Sistema SaaS para Gestión de Restaurantes

[![CI](https://github.com/2202031/Restguest/actions/workflows/ci-cd.yml/badge.svg)]
[![Deploy](https://github.com/2202031/Restguest/actions/workflows/deploy.yml/badge.svg)]
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]

RestGuest es una aplicación web SaaS orientada a la gestión interna de restaurantes, enfocada en reservas, clientes, lealtad e integración operativa.

Desarrollado bajo metodologías ágiles (Scrum + XP) como proyecto académico de la Universidad Tecnológica de la Riviera Maya.

---

## Descripción

RestGuest permite a los restaurantes optimizar la gestión de clientes, reservas y análisis de datos en una sola plataforma centralizada.

El sistema está diseñado para:
- Mejorar la eficiencia operativa
- Reducir errores en la gestión manual
- Incrementar la retención de clientes mediante programas de lealtad
- Facilitar la toma de decisiones con analítica

---

## Arquitectura

Arquitectura basada en servicios con separación frontend/backend:

- **Frontend:** Next.js (React)
- **Backend:** Spring Boot (API REST)
- **Base de datos:** PostgreSQL
- **Infraestructura:** Microsoft Azure (autenticación y almacenamiento)
- **Patrón arquitectónico:** MVC + Repository + DTO + Factory

---

## Requisitos

- Node.js 18+
- Java 17+
- PostgreSQL 15+
- Docker (opcional)
- Git

---

## Instalación y ejecución local

### 1. Clonar repositorio
```bash
git clone https://github.com/2202031/Restguest.git
cd Restguest
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env
```

### 3. Levantar Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

### 4. Levantar Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### 5. Acceso al sistema

`http://localhost:3000`

---

## Funcionalidades principales

- Sistema de reservas internas
- Gestión de clientes
- Programa de lealtad
- Integración con POS
- Análisis de datos operativos
- Gestión de usuarios y permisos

---

## Pruebas

```bash
# Frontend
npm run test

# Backend
./mvnw test
```

---

## CI/CD

El proyecto utiliza **GitHub Actions** para:

- Integración continua (tests automáticos)
- Construcción de artefactos
- Despliegue automatizado

Ubicación:

`.github/workflows/`

---

## Metodología

- **Gestión:** Scrum  
- **Desarrollo:** Extreme Programming (XP)

---

## Autores

- Brian Osorio Canul
- Carlos Arturo Pablo Álvarez
- Claudio Alberto Xool Castillo
- Emmanuel May Gutiérrez
- Ingrid Hernández Suaste
- Jafet Benjamín Peralta Jiménez

---

## Licencia

MIT License
