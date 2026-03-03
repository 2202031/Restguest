/** @type {import('next').NextConfig} */
const nextConfig = {
  // Esta línea es crucial para despliegues en contenedores como App Service
  output: 'standalone', 
  // ... otras configuraciones que ya tenías
};

export default nextConfig;