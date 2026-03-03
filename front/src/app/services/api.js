// src/services/api.js


import axios from 'axios';

// 1. Crear la instancia de Axios con la configuración base
const API = axios.create({
  // ¡IMPORTANTE! Reemplaza 'http://localhost:8080' con la URL y puerto de tu Spring Boot
  baseURL: 'http://localhost:8080/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Interceptor de Solicitudes: Adjunta el token JWT a todas las peticiones salientes
API.interceptors.request.use(
  (config) => {
    // Obtener el token almacenado (por ejemplo, en localStorage)
    const token = localStorage.getItem('authToken'); 

    if (token) {
      // Inyectar el token en el encabezado de autorización
      config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Exportar la instancia configurada para usarla en otros servicios
export default API;