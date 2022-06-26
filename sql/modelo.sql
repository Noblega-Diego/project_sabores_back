-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema elbuensabor
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema elbuensabor
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `elbuensabor` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema db_prueba_d
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_prueba_d
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_prueba_d` DEFAULT CHARACTER SET utf8mb4 ;
USE `elbuensabor` ;

-- -----------------------------------------------------
-- Table `elbuensabor`.`rubroarticulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`rubroarticulo` (
  `id` INT NOT NULL,
  `RubroArticulo_idRubroArticulo` INT NOT NULL,
  `denominacion` VARCHAR(45) NULL,
  INDEX `fk_RubroArticulo_RubroArticulo1_idx` (`RubroArticulo_idRubroArticulo` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_RubroArticulo_RubroArticulo1`
    FOREIGN KEY (`RubroArticulo_idRubroArticulo`)
    REFERENCES `elbuensabor`.`rubroarticulo` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`UnidadDeMedida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`UnidadDeMedida` (
  `id` INT NOT NULL,
  `unidadDeMedida` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`imagenes` (
  `id` INT NOT NULL,
  `url` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbuensabor`.`articuloinsumo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`articuloinsumo` (
  `id` INT NOT NULL,
  `IdRubroarticulo` INT NOT NULL,
  `denominacion` VARCHAR(75) NULL,
  `imagen` VARCHAR(255) NULL,
  `stockminimo` DOUBLE NULL,
  `esInsumo` TINYINT NULL,
  `stock` DOUBLE NULL,
  `UnidadDeMedida_idUnidadDeMedida` INT NOT NULL,
  `imagenes_idimagenes` INT NOT NULL,
  PRIMARY KEY (`id`, `imagenes_idimagenes`),
  INDEX `fk_articuloinsumo_rubroarticulo1_idx` (`IdRubroarticulo` ASC),
  INDEX `fk_articuloinsumo_UnidadDeMedida1_idx` (`UnidadDeMedida_idUnidadDeMedida` ASC),
  INDEX `fk_articuloinsumo_imagenes1_idx` (`imagenes_idimagenes` ASC),
  CONSTRAINT `fk_articuloinsumo_rubroarticulo1`
    FOREIGN KEY (`IdRubroarticulo`)
    REFERENCES `elbuensabor`.`rubroarticulo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articuloinsumo_UnidadDeMedida1`
    FOREIGN KEY (`UnidadDeMedida_idUnidadDeMedida`)
    REFERENCES `elbuensabor`.`UnidadDeMedida` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articuloinsumo_imagenes1`
    FOREIGN KEY (`imagenes_idimagenes`)
    REFERENCES `db_prueba_d`.`imagenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`rubrogeneral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`rubrogeneral` (
  `id` INT NOT NULL,
  `denominacion` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`Categoria` (
  `id` INT NOT NULL,
  `denominacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbuensabor`.`articulomanufacturado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`articulomanufacturado` (
  `id` INT NOT NULL,
  `idRubroGeneral` INT NULL DEFAULT NULL,
  `tiempoEstmadoCocina` INT NULL,
  `denominacion` VARCHAR(45) NULL,
  `imagen` VARCHAR(45) NULL,
  `Categoria_idCategoria` INT NOT NULL,
  `listado` BIT(1) NOT NULL DEFAULT 1,
  `articulomanufacturadocol` VARCHAR(45) NULL,
  `imagenes_idimagenes` INT NOT NULL,
  PRIMARY KEY (`id`, `imagenes_idimagenes`),
  INDEX `fk_ArticuloManufacturado_RubroGeneral1_idx` (`idRubroGeneral` ASC),
  INDEX `fk_articulomanufacturado_Categoria1_idx` (`Categoria_idCategoria` ASC),
  INDEX `fk_articulomanufacturado_imagenes1_idx` (`imagenes_idimagenes` ASC),
  CONSTRAINT `fk_ArticuloManufacturado_RubroGeneral1`
    FOREIGN KEY (`idRubroGeneral`)
    REFERENCES `elbuensabor`.`rubrogeneral` (`id`),
  CONSTRAINT `fk_articulomanufacturado_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `elbuensabor`.`Categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_articulomanufacturado_imagenes1`
    FOREIGN KEY (`imagenes_idimagenes`)
    REFERENCES `db_prueba_d`.`imagenes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`articulomanufacturadodetalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`articulomanufacturadodetalle` (
  `id` INT NOT NULL,
  `idArticuloManufacturado` INT NOT NULL,
  `idArticulo Insumo` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `UnidadDeMedida_idUnidadDeMedida` INT NOT NULL,
  INDEX `fk_ArticuloManufacturado_has_Articulo Insumo_Articulo Insum_idx` (`idArticulo Insumo` ASC),
  INDEX `fk_ArticuloManufacturado_has_Articulo Insumo_ArticuloManufa_idx` (`idArticuloManufacturado` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_articulomanufacturadodetalle_UnidadDeMedida1_idx` (`UnidadDeMedida_idUnidadDeMedida` ASC),
  CONSTRAINT `fk_ArticuloManufacturado_has_Articulo Insumo_Articulo Insumo1`
    FOREIGN KEY (`idArticulo Insumo`)
    REFERENCES `elbuensabor`.`articuloinsumo` (`id`),
  CONSTRAINT `fk_ArticuloManufacturado_has_Articulo Insumo_ArticuloManufact1`
    FOREIGN KEY (`idArticuloManufacturado`)
    REFERENCES `elbuensabor`.`articulomanufacturado` (`id`),
  CONSTRAINT `fk_articulomanufacturadodetalle_UnidadDeMedida1`
    FOREIGN KEY (`UnidadDeMedida_idUnidadDeMedida`)
    REFERENCES `elbuensabor`.`UnidadDeMedida` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`factura` (
  `id` INT NOT NULL,
  `fecha` DATE NULL,
  `numero` INT NULL,
  `porcentajeDescuento` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`pago` (
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`detallefactura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`detallefactura` (
  `id` INT NOT NULL,
  `idFactura` INT NOT NULL,
  `idPago` INT NOT NULL,
  INDEX `fk_DetalleFactura_Factura_idx` (`idFactura` ASC),
  INDEX `fk_DetalleFactura_Pago1_idx` (`idPago` ASC),
  CONSTRAINT `fk_DetalleFactura_Factura`
    FOREIGN KEY (`idFactura`)
    REFERENCES `elbuensabor`.`factura` (`id`),
  CONSTRAINT `fk_DetalleFactura_Pago1`
    FOREIGN KEY (`idPago`)
    REFERENCES `elbuensabor`.`pago` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`domicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`domicilio` (
  `id` INT NOT NULL,
  `calle` VARCHAR(45) NULL,
  `numero` INT NULL,
  `localidad` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`rol` (
  `id` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`usuario` (
  `id` INT NOT NULL,
  `idRol` INT NOT NULL,
  `Nombres` VARCHAR(45) NULL,
  `Apellidos` VARCHAR(90) NULL,
  `clave` VARCHAR(200) NOT NULL,
  `Email` VARCHAR(100) NULL,
  `usuario` VARCHAR(45) NOT NULL,
  `telefono` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuario_Rol1_idx` (`idRol` ASC),
  CONSTRAINT `fk_Usuario_Rol1`
    FOREIGN KEY (`idRol`)
    REFERENCES `elbuensabor`.`rol` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`pedido` (
  `id` INT NOT NULL,
  `idUsuario` INT NOT NULL,
  `idFactura` INT NOT NULL,
  `idDomicilioEntrega` INT NULL,
  `fecha` DATE NULL,
  `numero` INT NULL,
  `estado` INT NULL,
  `horaEstimadaFin` DATE NULL,
  `tipoenvio` ENUM('local', 'envio') NULL,
  `aclaracion` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Pedido_Factura1_idx` (`idFactura` ASC),
  INDEX `fk_Pedido_Usuario1_idx` (`idUsuario` ASC),
  INDEX `fk_Pedido_Domicilio1_idx` (`idDomicilioEntrega` ASC),
  CONSTRAINT `fk_Pedido_Domicilio1`
    FOREIGN KEY (`idDomicilioEntrega`)
    REFERENCES `elbuensabor`.`domicilio` (`id`),
  CONSTRAINT `fk_Pedido_Factura1`
    FOREIGN KEY (`idFactura`)
    REFERENCES `elbuensabor`.`factura` (`id`),
  CONSTRAINT `fk_Pedido_Usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `elbuensabor`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`detallepedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`detallepedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idPedido` INT NOT NULL,
  `idArticuloManufacturado` INT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idDetallePedido_UNIQUE` (`id` ASC),
  INDEX `fk_DetallePedido_Pedido1_idx` (`idPedido` ASC),
  INDEX `fk_DetallePedido_ArticuloManufacturado1_idx` (`idArticuloManufacturado` ASC),
  CONSTRAINT `fk_DetallePedido_ArticuloManufacturado1`
    FOREIGN KEY (`idArticuloManufacturado`)
    REFERENCES `elbuensabor`.`articulomanufacturado` (`id`),
  CONSTRAINT `fk_DetallePedido_Pedido1`
    FOREIGN KEY (`idPedido`)
    REFERENCES `elbuensabor`.`pedido` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`efectivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`efectivo` (
  `id` INT NOT NULL,
  `idPago` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_efectivo_pago1_idx` (`idPago` ASC),
  CONSTRAINT `fk_efectivo_pago1`
    FOREIGN KEY (`idPago`)
    REFERENCES `elbuensabor`.`pago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`estado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`estado` (
  `id` INT NOT NULL,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`mercadopago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`mercadopago` (
  `id` INT NOT NULL,
  `idPago` INT NOT NULL,
  `identificadorPago` VARCHAR(45) NULL,
  `fechacreacion` DATE NULL,
  `fechaAprobacion` DATE NULL,
  `formaPago` VARCHAR(45) NULL,
  `metodoPago` VARCHAR(45) NULL,
  `nroTarjeta` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_mercadopago_pago1_idx` (`idPago` ASC),
  CONSTRAINT `fk_mercadopago_pago1`
    FOREIGN KEY (`idPago`)
    REFERENCES `elbuensabor`.`pago` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`estadopedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`estadopedido` (
  `id` INT NOT NULL,
  `idPedido` INT NOT NULL,
  `idEstado` INT NOT NULL,
  `fecha` DATE NULL,
  INDEX `fk_Pedido_has_Estado_Pedido1_idx` (`idPedido` ASC),
  PRIMARY KEY (`id`),
  INDEX `fk_estadopedido_estado1_idx` (`idEstado` ASC),
  CONSTRAINT `fk_Pedido_has_Estado_Pedido1`
    FOREIGN KEY (`idPedido`)
    REFERENCES `elbuensabor`.`pedido` (`id`),
  CONSTRAINT `fk_estadopedido_estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `elbuensabor`.`estado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`precio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`precio` (
  `id` INT NOT NULL,
  `idArticuloInsumo` INT NOT NULL,
  `precioCostoArticuloInsumo` DOUBLE NOT NULL,
  `precioVentaArticuloInsumo` DOUBLE NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_precio_ArticuloInsumo1_idx` (`idArticuloInsumo` ASC),
  CONSTRAINT `fk_precio_ArticuloInsumo1`
    FOREIGN KEY (`idArticuloInsumo`)
    REFERENCES `elbuensabor`.`articuloinsumo` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `elbuensabor`.`precioArticuloManufacturado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`precioArticuloManufacturado` (
  `id` INT NOT NULL,
  `idArticuloManufacturado` INT NOT NULL,
  `precioVentaArticuloManufacturado` DOUBLE NULL,
  `precioCostoArticuloManufacturado` DOUBLE NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id`, `idArticuloManufacturado`),
  INDEX `fk_precioArticuloManufacturado_articulomanufacturado1_idx` (`idArticuloManufacturado` ASC),
  CONSTRAINT `fk_precioArticuloManufacturado_articulomanufacturado1`
    FOREIGN KEY (`idArticuloManufacturado`)
    REFERENCES `elbuensabor`.`articulomanufacturado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbuensabor`.`recetacab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`recetacab` (
  `id` INT NOT NULL,
  `denominacion` VARCHAR(100) NOT NULL,
  `instruccion` VARCHAR(2000) NOT NULL,
  `articulomanufacturado_idArticuloManufacturado` INT NOT NULL,
  PRIMARY KEY (`id`, `articulomanufacturado_idArticuloManufacturado`),
  INDEX `fk_recetacab_articulomanufacturado1_idx` (`articulomanufacturado_idArticuloManufacturado` ASC),
  CONSTRAINT `fk_recetacab_articulomanufacturado1`
    FOREIGN KEY (`articulomanufacturado_idArticuloManufacturado`)
    REFERENCES `elbuensabor`.`articulomanufacturado` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `elbuensabor`.`RecetaDetalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `elbuensabor`.`RecetaDetalle` (
  `id` INT NOT NULL,
  `cantidad` DECIMAL NULL,
  `recetacab_idrecetacab` INT NOT NULL,
  `articuloinsumo_idArticuloInsumo` INT NOT NULL,
  `UnidadDeMedida_idUnidadDeMedida` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_RecetaDetalle_recetacab1_idx` (`recetacab_idrecetacab` ASC),
  INDEX `fk_RecetaDetalle_articuloinsumo1_idx` (`articuloinsumo_idArticuloInsumo` ASC),
  INDEX `fk_RecetaDetalle_UnidadDeMedida1_idx` (`UnidadDeMedida_idUnidadDeMedida` ASC),
  CONSTRAINT `fk_RecetaDetalle_recetacab1`
    FOREIGN KEY (`recetacab_idrecetacab`)
    REFERENCES `elbuensabor`.`recetacab` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RecetaDetalle_articuloinsumo1`
    FOREIGN KEY (`articuloinsumo_idArticuloInsumo`)
    REFERENCES `elbuensabor`.`articuloinsumo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RecetaDetalle_UnidadDeMedida1`
    FOREIGN KEY (`UnidadDeMedida_idUnidadDeMedida`)
    REFERENCES `elbuensabor`.`UnidadDeMedida` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `db_prueba_d` ;

-- -----------------------------------------------------
-- Table `db_prueba_d`.`rubroinsumos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`rubroinsumos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `denominacion` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`insumos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`insumos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rubroInsumoId` INT(11) NULL DEFAULT NULL,
  `denominacion` VARCHAR(255) NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `unidadDeMedida` VARCHAR(255) NULL DEFAULT NULL,
  `stockMinimo` DOUBLE NULL DEFAULT NULL,
  `stock` DOUBLE NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `rubroInsumoId` (`rubroInsumoId` ASC),
  CONSTRAINT `insumos_ibfk_1`
    FOREIGN KEY (`rubroInsumoId`)
    REFERENCES `db_prueba_d`.`rubroinsumos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`rubrogenerals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`rubrogenerals` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `denominacion` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`categorias` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `denominacion` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`articulomanufacturados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`articulomanufacturados` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rubroGeneralId` INT(11) NULL DEFAULT NULL,
  `CategoriaId` INT(11) NULL DEFAULT NULL,
  `denominacion` VARCHAR(255) NULL DEFAULT NULL,
  `imagen` VARCHAR(255) NULL DEFAULT NULL,
  `tiempoEstimadoCocina` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `rubroGeneralId` (`rubroGeneralId` ASC),
  INDEX `CategoriaId` (`CategoriaId` ASC),
  CONSTRAINT `articulomanufacturados_ibfk_1`
    FOREIGN KEY (`rubroGeneralId`)
    REFERENCES `db_prueba_d`.`rubrogenerals` (`id`),
  CONSTRAINT `articulomanufacturados_ibfk_2`
    FOREIGN KEY (`CategoriaId`)
    REFERENCES `db_prueba_d`.`categorias` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`articulomanufacturadodetalles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`articulomanufacturadodetalles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `InsumoId` INT(11) NULL DEFAULT NULL,
  `ArticuloManufacturadoId` INT(11) NULL DEFAULT NULL,
  `cantidad` DOUBLE NULL DEFAULT NULL,
  `unidadDeMedida` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `InsumoId` (`InsumoId` ASC),
  INDEX `ArticuloManufacturadoId` (`ArticuloManufacturadoId` ASC),
  CONSTRAINT `articulomanufacturadodetalles_ibfk_1`
    FOREIGN KEY (`InsumoId`)
    REFERENCES `db_prueba_d`.`insumos` (`id`),
  CONSTRAINT `articulomanufacturadodetalles_ibfk_2`
    FOREIGN KEY (`ArticuloManufacturadoId`)
    REFERENCES `db_prueba_d`.`articulomanufacturados` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`pedidos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `numero` INT(11) NULL DEFAULT NULL,
  `tipoEntrega` ENUM('local', 'envio') NULL DEFAULT NULL,
  `horaEstimadaFin` DATETIME NULL DEFAULT NULL,
  `fecha` DATETIME NULL DEFAULT NULL,
  `estado` ENUM('pendiente', 'aprobado', 'proceso', 'finalizado', 'camino', 'entregado') NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`detallepedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`detallepedidos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cantidad` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `pedidoId` INT(11) NULL DEFAULT NULL,
  `articuloManufacturadoId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `pedidoId` (`pedidoId` ASC),
  INDEX `articuloManufacturadoId` (`articuloManufacturadoId` ASC),
  CONSTRAINT `detallepedidos_ibfk_1`
    FOREIGN KEY (`pedidoId`)
    REFERENCES `db_prueba_d`.`pedidos` (`id`),
  CONSTRAINT `detallepedidos_ibfk_2`
    FOREIGN KEY (`articuloManufacturadoId`)
    REFERENCES `db_prueba_d`.`articulomanufacturados` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`rols`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`rols` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `rolId` INT(11) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `usuario` VARCHAR(255) NULL DEFAULT NULL,
  `clave` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `telefono` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `rolId` (`rolId` ASC),
  CONSTRAINT `usuarios_ibfk_1`
    FOREIGN KEY (`rolId`)
    REFERENCES `db_prueba_d`.`rols` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`domicilios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`domicilios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `usuarioId` INT(11) NULL DEFAULT NULL,
  `calle` VARCHAR(255) NULL DEFAULT NULL,
  `numero` INT(11) NULL DEFAULT NULL,
  `localidad` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `usuarioId` (`usuarioId` ASC),
  CONSTRAINT `domicilios_ibfk_1`
    FOREIGN KEY (`usuarioId`)
    REFERENCES `db_prueba_d`.`usuarios` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`precioarticulomanufacturados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`precioarticulomanufacturados` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `articuloManufacturadoId` INT(11) NULL DEFAULT NULL,
  `precioVenta` DECIMAL(10,0) NULL DEFAULT NULL,
  `precioCompra` DECIMAL(10,0) NULL DEFAULT NULL,
  `fecha` DATETIME NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `articuloManufacturadoId` (`articuloManufacturadoId` ASC),
  CONSTRAINT `precioarticulomanufacturados_ibfk_1`
    FOREIGN KEY (`articuloManufacturadoId`)
    REFERENCES `db_prueba_d`.`articulomanufacturados` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`precioinsumos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`precioinsumos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `insumoId` INT(11) NULL DEFAULT NULL,
  `precioVenta` DOUBLE NULL DEFAULT NULL,
  `precioCompra` DOUBLE NULL DEFAULT NULL,
  `fecha` DATETIME NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `insumoId` (`insumoId` ASC),
  CONSTRAINT `precioinsumos_ibfk_1`
    FOREIGN KEY (`insumoId`)
    REFERENCES `db_prueba_d`.`insumos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


-- -----------------------------------------------------
-- Table `db_prueba_d`.`usuarioDomicilio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prueba_d`.`usuarioDomicilio` (
  `id` INT NOT NULL,
  `title` VARCHAR(45) NULL,
  `domicilio_idDomicilio` INT NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`id`, `domicilio_idDomicilio`),
  INDEX `fk_usuarioDomicilio_domicilio1_idx` (`domicilio_idDomicilio` ASC),
  INDEX `fk_usuarioDomicilio_usuario1_idx` (`usuario_idUsuario` ASC),
  CONSTRAINT `fk_usuarioDomicilio_domicilio1`
    FOREIGN KEY (`domicilio_idDomicilio`)
    REFERENCES `elbuensabor`.`domicilio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarioDomicilio_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `elbuensabor`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
