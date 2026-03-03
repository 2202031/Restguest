# Imagen base
FROM node:18

# Carpeta de trabajo
WORKDIR /app

# Copiar package.json primero (mejor cache)
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar resto del proyecto
COPY . .

# Puerto (ajústalo si usas otro)
EXPOSE 3000


CMD ["npm", "run", "start"]