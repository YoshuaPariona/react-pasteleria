# 🥐 Aplicación Web - Pan Comido

**Pan Comido** es una aplicación web para una panadería que permite a los usuarios explorar productos, agregarlos al carrito y realizar pedidos en línea.

## 👥 Integrantes

| Nro. | Integrantes         |
|------|---------------------|
| 1 | Chavez Apaza, Marcos Maidana |
| 2 | Pariona Inga, Logan Yoshua Leonardo |
| 3 | Villaverde Pacheco, Fabiola karina |

## ✨ Ficha Técnica

### 🔹 Frontend

- ⚡️ Creado con Vite  
- ⚛️ Framework: React + SWR  
- 🎨 Estilos con Tailwind CSS v4.1  
- 🧹 Linter: ESLint

### 🔸 Backend

- ☕ Framework: Spring Boot  
- 🧱 Construcción con Maven  
- 💾 Base de datos: MySQL

## 🛠️ Instalación del Frontend

1. Clona el repositorio:
``` bash
git clone https://github.com/YoshuaPariona/react-pasteleria.git  
cd react-pasteleria\frontend\
```
2. Instala las dependencias:
``` bash
npm install
```
3. Inicia el servidor de desarrollo:
``` bash
npm run dev
```
## 🚀 Instalación del Backend

> Asegúrate de tener Java 17+, Maven y MySQL instalados.

1. Navega a la carpeta del backend.
``` bash
cd react-pasteleria\backend\
```
2. Configura las credenciales de la base de datos en `src/main/resources/application.properties`.

3. Ejecuta el backend:
``` bash
./mvnw spring-boot:run
```
## 🔌 Rutas de la API

| Método | Ruta                   | Descripción                          |
|--------|------------------------|--------------------------------------|
| GET    | /api/productos         | Lista todos los productos|
| GET    | /api/categoria         | Lista todas las categorias|
| GET    | /api/clientes          | Obtiene los clientes|
| GET    | /api/ventas            | Obtiene las ventas|


## 🌟 Características principales

- Registro e inicio de sesión de clientes
- Visualización de productos con imágenes y precios
- Carrito de compras funcional con precios actualizados
- Proceso de compra conectado al backend
- Diseño responsive y moderno
<!-- - Historial de pedidos por cliente autenticado -->

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
