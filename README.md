Claro, aquí está un paso a paso para descargar un proyecto, ejecutar `pnpm`, y configurar la base de datos:

### 1. Descargar el Proyecto

1. **Clona el Repositorio**:
   - Si el proyecto está en un repositorio Git, clónalo usando `git`. Abre una terminal y ejecuta:
     ```bash
     git clone https://github.com/Andeveling/crud-sena.git
     ```
   - Cambia al directorio del proyecto:
     ```bash
     cd crud-sena
     ```

### 2. Instalar Dependencias con `pnpm`

1. **Instala `pnpm`**:

   - Si aún no tienes `pnpm` instalado, instálalo globalmente usando `npm`:
     ```bash
     npm install -g pnpm
     ```

2. **Instala las Dependencias del Proyecto**:
   - Ejecuta `pnpm` en el directorio del proyecto para instalar las dependencias:
     ```bash
     pnpm install
     ```

### 3. Configurar la Base de Datos

Claro, para simplificar las cosas, puedes pasar las credenciales directamente en el objeto de configuración de `TypeOrmModule.forRoot()` en tu módulo principal de NestJS (`AppModule`). Aquí está el ejemplo más sencillo para hacerlo:

### Configuración Sencilla de TypeORM en `AppModule`

1. **Asegúrate de tener las credenciales**:

   Vamos a asumir que ya tienes las credenciales de la base de datos que quieres usar.

2. **Configura TypeORM Directamente en `AppModule`**:

   En tu archivo `app.module.ts`, puedes configurar `TypeORM` directamente pasando las credenciales en el objeto de configuración.

   **`app.module.ts`**:

   ```typescript
   import { Module } from '@nestjs/common';
   import { TypeOrmModule } from '@nestjs/typeorm';
   import { Product } from './prodcuts/product.entity'; // Importa tus entidades aquí

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql', // O el tipo de base de datos que uses
         host: 'localhost', // Cambia esto si tu base de datos está en otro host
         port: 3306, // Cambia esto si usas un puerto diferente
         username: 'root', // Tu usuario de MySQL
         password: 'password', // Tu contraseña de MySQL
         database: 'my_database', // El nombre de tu base de datos
         entities: [Product], // Agrega tus entidades aquí
         synchronize: true, // Solo para desarrollo; no usar en producción
       }),
       // Otros módulos aquí
     ],
     // Otros módulos, proveedores, controladores aquí
   })
   export class AppModule {}
   ```

### 4. Ejecutar el Proyecto

1. **Ejecuta el Proyecto**:
   - Ejecuta el proyecto usando `pnpm`. El comando para ejecutar el proyecto depende de cómo esté configurado. Generalmente, se encuentra en el script de `package.json` bajo la clave `"scripts"`. Comúnmente se usa:
     ```bash
     pnpm start:dev
     ```

### 5. Verificar el Funcionamiento

1. **Verifica que el Proyecto Está Corriendo**:
   - Abre tu navegador y navega a `http://localhost:3000` o a la URL que esté configurada para tu proyecto.
   - Asegúrate de que la aplicación se cargue correctamente y de que las conexiones a la base de datos estén funcionando como se espera.

### Ejemplo de Flujo Completo

1. **Clonar el Proyecto**:

   ```bash
   git clone https://github.com/mi_usuario/mi_proyecto.git
   cd mi_proyecto
   ```

2. **Instalar `pnpm` y Dependencias**:

   ```bash
   npm install -g pnpm
   pnpm install
   ```

3. **Configurar Base de Datos**:

   - Configura TypeORM Directamente en `AppModule`
    ```typescript
   import { Module } from '@nestjs/common';
   import { TypeOrmModule } from '@nestjs/typeorm';
   import { Product } from './prodcuts/product.entity'; // Importa tus entidades aquí

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql', // O el tipo de base de datos que uses
         host: 'localhost', // Cambia esto si tu base de datos está en otro host
         port: 3306, // Cambia esto si usas un puerto diferente
         username: 'root', // Tu usuario de MySQL
         password: 'password', // Tu contraseña de MySQL
         database: 'my_database', // El nombre de tu base de datos
         entities: [Product], // Agrega tus entidades aquí
         synchronize: true, // Solo para desarrollo; no usar en producción
       }),
       // Otros módulos aquí
     ],
     // Otros módulos, proveedores, controladores aquí
   })
   export class AppModule {}


4. **Ejecutar el Proyecto**:

   ```bash
   pnpm start:dev
   ```

5. **Verificar Funcionamiento**:
   - Navega a `http://localhost:3000` y comprueba que la aplicación esté funcionando.



## Endpoints de Productos

### **GET /products**
Obtiene una lista de todos los productos.

**Respuesta**:
- `200 OK`: 
  ```json
  [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product Description",
      "price": 19.99,
      "stock": 100
    }
  ]
  ```

### **GET /products/:id**
Obtiene un producto específico por su ID.

**Parámetros**:
- `id`: ID del producto

**Respuesta**:
- `200 OK`: 
  ```json
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 19.99,
    "stock": 100
  }
  ```

### **POST /products**
Crea un nuevo producto.

**Cuerpo de Solicitud**:
```json
{
  "name": "New Product",
  "description": "Product Description",
  "price": 29.99,
  "stock": 50
}
```

**Respuesta**:
- `201 Created`: 
  ```json
  {
    "id": 2,
    "name": "New Product",
    "description": "Product Description",
    "price": 29.99,
    "stock": 50
  }
  ```

### **PATCH /products/:id**
Actualiza un producto existente.

**Parámetros**:
- `id`: ID del producto

**Cuerpo de Solicitud**:
```json
{
  "price": 24.99,
  "stock": 40
}
```

**Respuesta**:
- `200 OK`: 
  ```json
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 24.99,
    "stock": 40
  }
  ```

### **DELETE /products/:id**
Elimina un producto por su ID.

**Parámetros**:
- `id`: ID del producto

**Respuesta**:
- `204 No Content`
