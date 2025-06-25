-- Eliminar base de datos si existe
DROP DATABASE IF EXISTS `bd_panaderia_pancomido`;

-- Crear base de datos
CREATE DATABASE `bd_panaderia_pancomido`;

-- Usar base de datos
USE `bd_panaderia_pancomido`;

-- Table `bd_panaderia_pancomido`.`categorias`
CREATE TABLE IF NOT EXISTS `categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `imagen` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
);

-- Table `bd_panaderia_pancomido`.`clientes`
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(100) NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(11) NULL,
  `direccion` TEXT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Table `bd_panaderia_pancomido`.`ventas`
CREATE TABLE IF NOT EXISTS `ventas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT NULL,
  `fecha` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `total` DECIMAL(10,2) NULL,
  `tipo_pago` ENUM('efectivo', 'tarjeta', 'yape', 'plin', 'otro') NULL,
  `numero_comprobante` VARCHAR(50) NULL,
  `igv` DECIMAL(10,2) GENERATED ALWAYS AS (ROUND(`total` * 18 / 118, 2)) VIRTUAL,
  `forma_entrega` ENUM('recojo', 'delivery') NULL,
  PRIMARY KEY (`id`),
  INDEX (`cliente_id`),
  CONSTRAINT `ventas_ibfk_1`
    FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`)
);

-- Table `bd_panaderia_pancomido`.`productos`
CREATE TABLE IF NOT EXISTS `productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL,
  `descripcion` VARCHAR(255) NULL,
  `precio` DOUBLE NULL,
  `categoria_id` INT NULL,
  `imagen` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `categoria_id` (`categoria_id` ASC),
  CONSTRAINT `productos_ibfk_1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `categorias` (`id`)
);

-- Table `bd_panaderia_pancomido`.`detalle_venta`
CREATE TABLE IF NOT EXISTS `detalle_venta` (
  `venta_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT,
  `precio_unitario` DECIMAL(10,2),
  `subtotal` DECIMAL(10,2) GENERATED ALWAYS AS ((`cantidad` * `precio_unitario`)) VIRTUAL,
  `descripcion` TEXT DEFAULT NULL,
  PRIMARY KEY (`venta_id`, `producto_id`),
  CONSTRAINT `detalle_venta_ibfk_1`
    FOREIGN KEY (`venta_id`)
    REFERENCES `ventas` (`id`)
    ON DELETE CASCADE,
  CONSTRAINT `detalle_venta_ibfk_2`
    FOREIGN KEY (`producto_id`)
    REFERENCES `productos` (`id`)
);

-- --------------------------
-- Inserción de datos
-- --------------------------
USE `bd_panaderia_pancomido`;

-- Insertar categorías
INSERT INTO categorias (nombre, imagen) VALUES
('Bizcochos', 'categorias/bizcochos.webp'),
('Panes', 'categorias/panes.webp'),
('Pies', 'categorias/pies.webp'),
('Piononos', 'categorias/piononos.webp'),
('Pizzas', 'categorias/pizzas.webp'),
('Tortas', 'categorias/tortas.webp');

-- Insertar productos
INSERT INTO productos (nombre, descripcion, precio, categoria_id, imagen) VALUES
('Bizcocho de chocolate', 'Bizcocho esponjoso de chocolate, ideal para los amantes del cacao.', 12.99, 1, 'productos/bizcocho-chocolate.webp'),
('Bizcocho de coco', 'Bizcocho de coco con un toque tropical y textura suave.', 11.99, 1, 'productos/bizcocho-coco.webp'),
('Bizcocho de naranja', 'Bizcocho de naranja con un sabor cítrico refrescante.', 10.99, 1, 'productos/bizcocho-naranja.webp'),
('Bizcocho de vainilla', 'Bizcocho clásico de vainilla, suave y aromático.', 9.99, 1, 'productos/bizcocho-vainilla.webp'),
('Pan de ajo', 'Pan de ajo crujiente, perfecto para acompañar tus platos favoritos.', 4.99, 2, 'productos/pan-ajo.webp'),
('Pan artesanal', 'Pan artesanal con una corteza crujiente y miga esponjosa.', 5.99, 2, 'productos/pan-artesanal.webp'),
('Pan baguette', 'Baguette tradicional francesa, crujiente por fuera y tierna por dentro.', 3.99, 2, 'productos/pan-baguette.webp'),
('Pan de centeno', 'Pan de centeno con un sabor distintivo y ligeramente dulce.', 6.99, 2, 'productos/pan-centeno.webp'),
('Pan francés', 'Pan francés clásico, ideal para el desayuno o la cena.', 3.49, 2, 'productos/pan-frances.webp'),
('Pan integral', 'Pan integral rico en fibra, perfecto para una dieta saludable.', 4.49, 2, 'productos/pan-integral.webp'),
('Pie de calabaza', 'Pie de calabaza con especias, ideal para el otoño.', 14.99, 3, 'productos/pie-calabaza.webp'),
('Pie de cereza', 'Pie de cereza dulce y jugosa, perfecto para postres.', 15.99, 3, 'productos/pie-cereza.webp'),
('Pie de limón', 'Pie de limón con un equilibrio perfecto entre dulce y ácido.', 13.99, 3, 'productos/pie-limon.webp'),
('Pie de queso', 'Pie de queso cremoso, un clásico favorito.', 16.99, 3, 'productos/pie-queso.webp'),
('Pionono de chocolate', 'Pionono de chocolate relleno de crema, delicioso y esponjoso.', 8.99, 4, 'productos/pionono-chocolate.webp'),
('Pionono de crema', 'Pionono relleno de crema pastelera, suave y delicado.', 7.99, 4, 'productos/pionono-crema.webp'),
('Pionono de dulce de leche', 'Pionono relleno de dulce de leche, dulce y cremoso.', 8.49, 4, 'productos/pionono-dulce-leche.webp'),
('Pionono de frutas', 'Pionono relleno de frutas frescas, refrescante y ligero.', 9.49, 4, 'productos/pionono-frutas.webp'),
('Pizza casera', 'Pizza casera con ingredientes frescos y una masa deliciosa.', 17.99, 5, 'productos/pizza-casera.webp'),
('Pizza hawaiana', 'Pizza hawaiana con jamón y piña, dulce y salada.', 18.99, 5, 'productos/pizza-hawaiana.webp'),
('Pizza margarita', 'Pizza margarita clásica con tomate y albahaca.', 16.99, 5, 'productos/pizza-margarita.webp'),
('Pizza de pepperoni', 'Pizza de pepperoni picante, llena de sabor.', 19.99, 5, 'productos/pizza-pepperoni.webp'),
('Pizza vegetariana', 'Pizza vegetariana con una variedad de vegetales frescos.', 17.49, 5, 'productos/pizza-vegetariana.webp'),
('Torta de cheesecake', 'Torta de cheesecake cremosa y deliciosa, con base de galleta.', 21.99, 6, 'productos/torta-cheesecake.webp'),
('Torta de chocolate', 'Torta de chocolate intensa y decadente, perfecta para ocasiones especiales.', 22.99, 6, 'productos/torta-chocolate.webp'),
('Torta Red Velvet', 'Torta Red Velvet con un toque de cacao y crema de queso.', 23.99, 6, 'productos/torta-red-velvet.webp'),
('Torta de tres leches', 'Torta de tres leches esponjosa y húmeda, empapada en tres tipos de leche.', 20.99, 6, 'productos/torta-tres-leches.webp');

-- Insertar clientes
INSERT INTO clientes (nombres, email, telefono, direccion, password) VALUES
('Yoshua Pariona', 'yoshua@gmail.com', '912345321', 'Calle Falsa 321', '123456'),
('Juan Pérez', 'juan0@example.com', '987654321', 'Av. Central 123', '123456'),
('Ana Torres', 'ana0@example.com', '912345678', 'Calle Falsa 456', '123456'),
('Juan Pérez', 'juan@example.com', '987654321', 'Av. Central 123', '123456'),
('Ana Torres', 'ana@example.com', '912345678', 'Calle Falsa 456', '123456');

-- Insertar ventas
INSERT INTO ventas (cliente_id, tipo_pago, numero_comprobante, total, forma_entrega) VALUES
(1, 'yape', 'B001-000123', 45.94, 'recojo'),
(2, 'tarjeta', 'B001-000124', 43.97, 'delivery'),
(3, 'efectivo', 'B001-000125', 34.98, 'delivery'),
(4, 'plin', 'B001-000126', 33.97, 'recojo'),
(5, 'otro', 'B001-000127', 22.99, 'recojo');

-- Insertar detalle de venta 
INSERT INTO detalle_venta (venta_id, producto_id, cantidad, precio_unitario, descripcion) VALUES
-- Venta 1: Juan compró 2 productos
(1, 1, 2, 12.99, 'Bizcocho de chocolate para desayuno'),
(1, 5, 4, 4.99, 'Pan de ajo adicional'),

-- Venta 2: Ana compró 2 productos
(2, 2, 1, 11.99, 'Bizcocho de coco'),
(2, 12, 2, 15.99, 'Pie de cereza'),

-- Venta 3: Carlos compró 1 producto
(3, 23, 2, 17.49, 'Pizza vegetariana'),

-- Venta 4: Laura compró 2 productos
(4, 14, 1, 16.99, 'Pie de queso grande'),
(4, 17, 2, 8.49, 'Pionono dulce de leche'),

-- Venta 5: Pedro compró 1 producto
(5, 25, 1, 22.99, 'Torta de chocolate especial');