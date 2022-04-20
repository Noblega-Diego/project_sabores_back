drop database buen_sabor;
create database buen_sabor;

use buen_sabor;

CREATE TABLE IF NOT EXISTS Usuario (
  id bigint NOT NULL AUTO_INCREMENT,
  usuario VARCHAR(45) not null,
  clave VARCHAR(45) not null,
  rol VARCHAR(45) not null,
  created_at timestamp not null,
  updated_at timestamp null on update current_timestamp,
  deleted bit(1) not null default 0,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Domicilio (
  id bigint NOT NULL AUTO_INCREMENT,
  calle VARCHAR(45) not null,
  numero INT not null,
  localidad VARCHAR(45) not null,
  created_at timestamp not null,
  updated_at timestamp null on update current_timestamp,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Cliente (
  id bigint NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) not null,
  apellido VARCHAR(45) not null,
  telefono VARCHAR(45),
  email VARCHAR(45) not null,
  usuario_id bigint not null, 
  domicilio_id bigint not null, 
  PRIMARY KEY (id),
  FOREIGN KEY (usuario_id)
    REFERENCES Usuario (`id`),
  FOREIGN KEY (domicilio_id)
	REFERENCES Domicilio (`id`)
);


create table Factura(
	nro_factura bigint not null auto_increment,
	fecha date not null,
	monto_descuento double not null,
	forma_pago int not null,
	nro_tarjeta varchar(16),
	total_venta double not null,
	total_costo double not null,
	created_at timestamp not null,
	updated_at timestamp null on update current_timestamp,
	deleted bit(1) not null default 0,
	primary key (nro_factura)
);

CREATE TABLE IF NOT EXISTS RubroGeneral(
	id bigint not null auto_increment,
    denominacion varchar(255),
    created_at timestamp not null,
    updated_at timestamp null on update current_timestamp,
	primary key(id)
);

CREATE TABLE IF NOT EXISTS ArticuloManuFacturado(
	id bigint not null auto_increment,
	tiempo_estimado_cocina int not null,
    denominacion varchar(255),
    precio_venta double,
    imagen varchar(400),
    created_at timestamp not null,
    updated_at timestamp null on update current_timestamp,
    rubro_id bigint not null,
    primary key(id),
    foreign key(rubro_id) references RubroGeneral(id)
);

CREATE TABLE IF NOT EXISTS ArticuloInsumo(
	id bigint not null auto_increment,
	denominacion varchar(255) not null,
    precio_compra double,
    precio_venta double,
    stock_actual double,
    stock_minimo double,
    unidad_medida varchar(3),
    esinsumo boolean,
    created_at timestamp not null,
    updated_at timestamp null on update current_timestamp,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS ArticuloManufacturadoDetalle(
	id bigint not null auto_increment,
	cantidad double not null,
    unidad_medida varchar(3),
    created_at timestamp not null,
    updated_at timestamp null on update current_timestamp,
    articulomanufacturado_id bigint not null,
    articuloinsumo_id bigint not null,
    primary key(id),
    foreign key(articulomanufacturado_id) references ArticuloManufacturado(id),
    foreign key(articuloinsumo_id) references ArticuloInsumo(id)
);

CREATE TABLE IF NOT EXISTS MercadoPagoDatos(
	id_pago bigint not null auto_increment,
	fecha_creacion date,
	fecha_aprovacion date,
	forma_pago int,
	metodo_pago int,
	nro_tarjeta varchar (16),
	estado int,
	primary key(id_pago)
);

CREATE TABLE IF NOT EXISTS Pedido(
	nro_pedido bigint not null auto_increment,
	fecha date,
	estado int,
	hora_estimada_entrega datetime,
	tipo_envio int,
	total double,
	created_at timestamp not null,
	updated_at timestamp null on update current_timestamp,
	deleted bit(1) not null default 0,
    mercado_pago_id bigint null,
	primary key (nro_pedido),
    foreign key (mercado_pago_id) references MercadoPagoDatos(id_pago) 
);

CREATE TABLE IF NOT EXISTS detallePedido(
	id bigint not null auto_increment,
	cantidad double not null,
	subtotal double not null,
    pedido_nro bigint not null,
    articulomanufacturado_id bigint not null,
    articuloinsumo_id bigint not null,
	primary key(id),
    foreign key(pedido_nro) REFERENCES Pedido(nro_pedido),
    foreign key(articulomanufacturado_id) REFERENCES ArticuloManuFacturado(id),
    foreign key(articuloinsumo_id) REFERENCES ArticuloInsumo(id)
);

CREATE TABLE IF NOT EXISTS DetalleFactura(
	id bigint not null auto_increment,
	cantidad int not null,
	subtotal double not null,
    factura_nro bigint not null,
    articulomanufacturado_id bigint not null,
    articuloinsumo_id bigint not null,
	primary key (id),
    foreign key(factura_nro) REFERENCES Factura(nro_factura),
    foreign key(articulomanufacturado_id) REFERENCES ArticuloManuFacturado(id),
    foreign key(articuloinsumo_id) REFERENCES ArticuloInsumo(id)
);

