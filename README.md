 Backend API – Express + MongoDB + JWT

 Descripción del proyecto

El proyecto consiste en un servidor backend desarrollado con Node.js, Express y MongoDB, que implementa autenticación mediante JWT y sigue el patrón de arquitectura MVC (Modelo–Vista–Controlador).

La aplicación permite registrar y autenticar usuarios,  gestionar una entidad protegida (Tareas) asociada al usuario autenticado.
Cada usuario solo puede acceder y modificar sus propios recursos.


 Tecnologías utilizadas

Node.js
Express
MongoDB + Mongoose
JWT (jsonwebtoken)
bcryptjs
dotenv
nodemon

- Instalación y ejecución
1️⃣ Clonar el repositorio
git clone https://github.com/amartello88/2da-entrega-martello.git
cd entrega2-back-end

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto basado en .env.example:

PORT=4000
MONGO_URI=mongodb://localhost:27017/backendtp
JWT_SECRET=pepe123


Asegurarse de tener MongoDB corriendo localmente.

4️⃣ Ejecutar el servidor

Modo desarrollo:

npm run dev

Modo producción:

npm start


El servidor se ejecutará en:

http://localhost:4000
