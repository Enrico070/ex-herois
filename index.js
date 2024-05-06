const express = require('express');
const { Pool } = require('pg')

const app = express();
const PORT = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'heroisbb',
  password: 'ds564',
  port: 5432,
});


app.use(express.json());


// Parte das ações da tabela heróis

app.get('/herois', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM herois')
    res.json({
      total: resultado.rowCount,
      herois: resultado.rows,
    })
  } catch (error) {
    console.error('Erro ao obter todos os heróis', error);
    res.status(500).send('Erro ao obter todos os heróis')
  }
})

app.post('/herois', async (req, res) => {
  try {
    const { nome, poder, nivel, hp, ataque } = req.body;
    if (nivel != 1) {
      res.status(400).send('O nível inicial de um herói é 1, vença batalhas para aumentar o nível de seu herói cada vez mais');
    } else if (hp > 1000) {
      res.status(400).send('O valor máximo da vida de um herói é 1000');
    } 
     else if (hp < 1) {
      res.status(400).send('O valor mínimo da vida de um herói é 1');
    }else if (ataque > 500) {
      res.status(400).send('O valor máximo do ataque de um herói é 500');
    }else if (ataque < 1) {
      res.status(400).send('O valor mínimo do ataque de um herói é 1');
    } else {
      await pool.query('INSERT INTO herois (nome, poder, nivel, hp, ataque) VALUES ($1, $2, $3, $4, $5)', [nome, poder, nivel, hp, ataque]);
      res.status(201).send({ mensagem: 'Herói criado com sucesso' });
    }
  } catch (error) {
    console.error('Erro ao inserir o herói', error);
    res.status(500).send('Erro ao inserir o herói');
  }
});

app.delete('/herois/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM herois WHERE id = $1', [id]);
      res.status(200).send({ mensagem: 'Herói excluído com sucesso'});
    } catch (error) {
      console.error('Erro ao excluir herói:', error);
      res.status(500).send('Erro ao excluir herói');
    }
  });


app.put('/herois/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, poder, nivel, hp, ataque } = req.body;
    if (nivel != 1) {
      res.status(400).send('O nível inicial de um herói é 1, vença batalhas para aumentar o nível de seu herói cada vez mais');
    } else if (hp > 1000) {
      res.status(400).send('O valor máximo da vida de um herói é 1000');
    } 
     else if (hp < 1) {
      res.status(400).send('O valor mínimo da vida de um herói é 1');
    }else if (ataque > 500) {
      res.status(400).send('O valor máximo do ataque de um herói é 500');
    }else if (ataque < 1) {
      res.status(400).send('O valor mínimo do ataque de um herói é 1');
    } else {
      await pool.query('UPDATE herois SET nome = $1, poder = $2, nivel = $3, hp = $4, ataque = $5 WHERE id = $6', [nome, poder, nivel, hp, ataque, id]);
      res.status(200).send({ mensagem: 'Herói atualizado com sucesso' });
    }
  
    
  } catch (error) {
    console.error('Erro ao atualizar herói:', error);
    res.status(500).send('Erro ao atualizar herói');
  }
});


  app.get('/herois/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        res.status(404).send({ mensagem: 'Herói não encontrado' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error('Erro ao obter herói por ID:', error);
      res.status(500).send('Erro ao obter herói por ID');
    }
  });

  // Parte das ações da tabela batalhas

  app.get('/batalhas/:heroi1_id/:heroi2_id', async (req, res) => {
    try {
      const { heroi1_id, heroi2_id, vencedor_id} = req.params;
      const batalha = await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
     
    } catch (error) {
      console.error('Erro ao executar batalha:', error);
      res.status(500).send('Erro ao executar batalha');
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}🚀`);
})


app.get('/', (req, res) => {
  res.send('A rota está funcionando!')
})

