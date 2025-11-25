
// src/services/dataService.js


import API from './api'; 

/**
 * Obtiene todos los elementos principales de la aplicación.
 * Este request automáticamente incluye el token si el usuario está logueado.
 */
export const getAllPinoData = async () => {
  try {
    // Llama al endpoint de datos (ej: http://localhost:8080/api/data)
    const response = await API.get('/data'); 
    return response.data;
  } catch (error) {
    // Manejo de error si la petición falla (ej: token inválido/expirado)
    console.error('Error al obtener datos:', error);
    throw error.response?.data || new Error('No se pudieron cargar los datos.');
  }
};