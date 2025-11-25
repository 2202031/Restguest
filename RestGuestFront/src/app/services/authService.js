
// src/services/authService.js


import API from './api'; 

// *** Función de Login Ajustada ***
export const login = async (credentials) => {
  try {
    // Llama a POST /api/auth/login
    const response = await API.post('/auth/login', credentials); 
    
    // El backend devuelve el JWT como un String directamente en response.data
    const jwtToken = response.data;
    
    // 1. Guardar el token para que el interceptor de API.js lo use después
    if (jwtToken) {
      localStorage.setItem('authToken', jwtToken); 
    }
    
    return jwtToken; // Retorna el token o cualquier objeto que tu componente necesite
  } catch (error) {
    // Manejo de errores de autenticación
    console.error('Login fallido:', error.response?.data);
    throw error.response?.data || new Error('Error al conectar con el servidor.');
  }
};

// *** Función de Registro ***
export const register = async (userData) => {
  try {
    // Llama a POST /api/auth/register
    const response = await API.post('/auth/register', userData);
    return response.data; // Devuelve el objeto User registrado
  } catch (error) {
    console.error('Registro fallido:', error.response?.data);
    throw error.response?.data || new Error('Error al conectar con el servidor.');
  }
};

// Función de Logout (para el frontend)
export const logout = () => {
    localStorage.removeItem('authToken');
    // Esto es solo para el frontend. El endpoint /logout en tu backend es opcional para logs.
};