DROP DATABASE IF EXISTS myapp;

CREATE DATABASE myapp;
USE myapp;

CREATE TABLE list (
	id INTEGER AUTO_INCREMENT,
	value TEXT,
	PRIMARY KEY (id)
)
