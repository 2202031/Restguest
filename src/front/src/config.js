// Configuración central de la aplicación
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081",
  appName: process.env.NEXT_PUBLIC_APP_NAME || "RestGuest",
  appEnv: process.env.NEXT_PUBLIC_APP_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
};

export default config;