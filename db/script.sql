--Criação do banco

CREATE DATABASE aulaback;

--Crição da tabela

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
)

--Inserção de dados teste

INSERT INTO usuarios(nome, email) VALUES ('João', 'joaosantos@gmail.com');
INSERT INTO usuarios(nome, email) VALUES ('M.Rita', 'mariarita@gmail.com');
