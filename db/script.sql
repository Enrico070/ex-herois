--Criação do banco

CREATE DATABASE heroisbb;

--Crição das tabelas

CREATE TABLE herois(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    poder VARCHAR(100) NOT NULL,
    nivel INT NOT NULL,
    hp INT NOT NULL,
    ataque INT NOT NULL
)

CREATE TABLE batalhas(
    id SERIAL PRIMARY KEY,
    heroi1_id INT NOT NULL,
    heroi2_id INT NOT NULL,
    vencedor_id INT NOT NULL,
    FOREIGN KEY (heroi1_id) REFERENCES herois(id)
    FOREIGN KEY (heroi2_id) REFERENCES herois(id)
    FOREIGN KEY (vencedor_id) REFERENCES herois(id)
)

--Inserção de dados teste

INSERT INTO herois(nome, email) VALUES ('João', 'joaosantos@gmail.com');
INSERT INTO herois(nome, email) VALUES ('M.Rita', 'mariarita@gmail.com');
