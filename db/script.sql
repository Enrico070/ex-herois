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
);

CREATE TABLE batalhas(
    id SERIAL PRIMARY KEY,
    heroi1_id INT NOT NULL,
    heroi2_id INT NOT NULL,
    vencedor_id INT,
    FOREIGN KEY (heroi1_id) REFERENCES herois(id),
    FOREIGN KEY (heroi2_id) REFERENCES herois(id),
    FOREIGN KEY (vencedor_id) REFERENCES herois(id)
);

--Inserção de dados teste

INSERT INTO herois(nome, poder, nivel, hp, ataque) VALUES ('Deadpool', 'Fator de Cura', 1, 999, 198);
INSERT INTO herois(nome, poder, nivel, hp, ataque) VALUES ('Wolverine', 'Garras de Adamantium', 1, 901, 212);
INSERT INTO herois(nome, poder, nivel, hp, ataque) VALUES ('Motoqueiro Fantasma', 'Correntes de Fogo', 1, 530, 177);
INSERT INTO herois(nome, poder, nivel, hp, ataque) VALUES ('Venom', 'Simbionte', 1, 411, 200);


