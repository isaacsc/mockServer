# Definimos la imagen desde la que quermos construir la nuestra
FROM node:10

# Crear el directorio app, que será nuestro directorio de trabajo
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copiamos el código del API dentro de la imagen de Docker
COPY . /usr/src/app

# Instalar las dependencias de app
RUN npm install

# Definimos el puerto que quermos utilizar
EXPOSE 3000

# Definimos el comando que se usará para ejecutar la app
CMD [ "npm", "start" ]