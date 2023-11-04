CREATE TABLE profesores(
	id_profesor BINARY(16),
  nombre VARCHAR(64) NOT NULL,
  a_paterno VARCHAR(64) NOT NULL,
  a_materno VARCHAR(64) NOT NULL,
  correo VARCHAR(64) NOT NULL,
  telefono VARCHAR(16) NOT NULL,
  PRIMARY KEY(id_profesor)
);

INSERT INTO profesores VALUES
	(UUID_TO_BIN(UUID()), "Abigail", "Zamora", "Hernandez", "azamora@correo.com", "1234567890"),
  (UUID_TO_BIN(UUID()), "Luis Felipe", "Marin", "Urias", "lmarin@correo.com", "1234567890");


/* AGREGAR ESTA TABLA EN EL DIIAGRAMA */
CREATE TABLE region(
	id_region INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(64) NOT NULL,
  PRIMARY KEY(id_region)
);

INSERT INTO region(nombre) VALUES
("Veracruz"),
("Xalapa"),
("Orizaba - Córdoba"),
("Poza Rica - Tuxpan"),
("Coatzacoalcos - Minatitlán");

CREATE TABLE campus(
	id_campus INT AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(64) NOT NULL,
  calle VARCHAR(64) NOT NULL,
  municipio VARCHAR(64) NOT NULL,
  cp VARCHAR(10) NOT NULL,
  id_region INT NOT NULL,
  PRIMARY KEY(id_campus),
  KEY id_region(id_region),
  CONSTRAINT region_fk
  FOREIGN KEY (id_region) REFERENCES region(id_region)
);


CREATE TABLE area(
  id_area INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(64) NOT NULL,
  PRIMARY KEY (id_area)
);

CREATE TABLE facultad(
	id_facultad INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(36) NOT NULL,
  id_area INT NOT NULL,
  PRIMARY KEY(id_facultad),
  KEY id_area(id_area),
  CONSTRAINT area_fk
  FOREIGN KEY (id_area)
  REFERENCES area(id_area)
);

DROP TABLE facultadCampus;
CREATE TABLE facultadCampus(
	id_facultad_campus INT NOT NULL AUTO_INCREMENT,
  id_campus INT NOT NULL,
  id_facultad INT NOT NULL,
  PRIMARY KEY(id_facultad_campus),
  KEY id_campus(id_campus),
  CONSTRAINT campus_fk
  FOREIGN KEY (id_campus) REFERENCES campus(id_campus),
  KEY id_facultad(id_facultad),
  CONSTRAINT facultad_fk
  FOREIGN KEY (id_facultad) REFERENCES facultad(id_facultad)
);

/* HACER MODIFICACIONES EN ESTA TABLA  */
CREATE TABLE carrera(
	id_carrera INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(64) NOT NULL,
  modalidad VARCHAR(64) NOT NULL,
  creditos VARCHAR(4),
  PRIMARY KEY(id_carrera)
);

CREATE TABLE carreraFacultad(
	id_carrera_facultad INT NOT NULL AUTO_INCREMENT,
  id_carrera INT NOT NULL,
  id_facultad INT NOT NULL,
  PRIMARY KEY(id_carrera_facultad),
 	KEY id_carrera(id_carrera),
  CONSTRAINT carrera_FK
  FOREIGN KEY (id_carrera) REFERENCES carrera(id_carrera),
  KEY id_facultad(id_facultad),
  CONSTRAINT facultad_FK_2
  FOREIGN KEY (id_facultad) REFERENCES facultad(id_facultad)
);

CREATE TABLE egresados(
	matricula VARCHAR(36) NOT NULL,
  nombre VARCHAR(64) NOT NULL,
  a_paterno VARCHAR(64) NOT NULL,
  a_materno VARCHAR(64) NOT NULL,
  correo VARCHAR(64) NOT NULL,
  telefono VARCHAR(64) NOT NULL,
  id_carrera INT NOT NULL,
  id_forma_egreso VARCHAR(36) NOT NULL,
  PRIMARY KEY( matricula ),
  KEY id_carrera(id_carrera),
  CONSTRAINT carrera_fk_2
  FOREIGN KEY (id_carrera) REFERENCES carrera(id_carrera)
);

/* INSERT DATA */

INSERT INTO campus(nombre, calle, municipio, cp) VALUES
("Mocambo", "Calz Juan Pablo II", "Boca Del Rio", "");

INSERT INTO carrera(nombre, modalidad, creditos) VALUES
("Ingenieria Quimica", "Licenciatura", "320"),
("Ingenieria Mecanica", "Licenciatura", "340"),
("Ingenieria Informatica", "Licenciatura", "340");

INSERT INTO egresados(matricula, nombre, a_paterno, a_materno, correo, telefono, id_carrera, id_forma_egreso) VALUES
("s18018258", "Lorenzo Antonio", "Alcocer", "Bautista", "lorenzo.alcocer@correo.com", "1234567890", 3, "");


SELECT * FROM egresados;