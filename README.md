# Proyecto Integrador - RestGest

[![CI](https://github.com/2202031/Restguest/actions/workflows/ci-cd.yml/badge.svg)]
[![Deploy](https://github.com/2202031/Restguest/actions/workflows/deploy.yml/badge.svg)]
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]

Sistema web para la gestión integral de restaurantes desarrollado como proyecto integrador académico.

---

## Tabla de Contenidos

* [Requisitos](#requisitos)
* [Instalación](#instalación)
* [Uso](#uso)
* [Tests](#tests)
* [Stack Tecnológico](#stack-tecnológico)
* [Deployment](#deployment)
* [Autores](#autores)
* [Licencia](#licencia)

---

## Requisitos

* Node.js 18+
* PostgreSQL 15+
* Docker (opcional)
* Git

---

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/2202031/Restguest.git

# Entrar al proyecto
cd Restguest

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Ejecutar migraciones (si aplica)
npm run migrate

# Iniciar servidor en desarrollo
npm run dev
```

Carrera: Ingeniería en Gestión y Desarrollo de Software
Asignatura: Gestión del Proceso de Desarrollo de Software
Proyecto Integrador – RestGest

---

## Uso

El sistema permite:

* Gestión de restaurantes
* Administración de clientes
* Control de reservas
* Gestión de usuarios y accesos
* Panel administrativo web

Acceder desde:

```
http://localhost:3000
```

---

## Tests

```bash
# Tests unitarios
npm run test:unit

# Tests de integración
npm run test:integration

# Cobertura de pruebas
npm run test:coverage
```

---

## Stack Tecnológico

* **Frontend:** Next.js + React
* **Backend:** Node.js + Express / Spring Boot (según módulo)
* **Base de datos:** PostgreSQL
* **Contenedores:** Docker
* **Testing:** Jest / Cypress
* **CI/CD:** GitHub Actions

---

## Deployment

El proyecto utiliza integración y despliegue continuo mediante **GitHub Actions**:

* Ejecuta pruebas automáticamente
* Construye contenedores Docker
* Realiza despliegue automático (según configuración)

Workflows ubicados en:

```
.github/workflows/
```

---

## Autores

* TSU. Brian Osorio Canul – 2202031
* TSU. Carlos Arturo Pablo Álvarez – 2202067
* TSU. Claudio Alberto Xool Castillo – 2202069
* TSU. Emmanuel May Gutiérrez – 2202106
* TSU. Ingrid Hernández Suaste – 2202047
* TSU. Jafet Benjamín Peralta Jiménez – 2202003

---

## Licencia

Este proyecto se distribuye bajo la licencia MIT.
