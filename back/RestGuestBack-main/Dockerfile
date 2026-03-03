FROM node:18

WORKDIR /app

COPY back/RestGuestBack-main/package*.json ./

RUN npm install

COPY back/RestGuestBack-main ./

EXPOSE 3000


CMD ["npm", "run", "start"]