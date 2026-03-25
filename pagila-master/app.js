const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();

const pool = new Pool({
  host: '/tmp',
  port: 5433,
  user: 'codespace',
  database: 'pagila'
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/peliculas', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT title, release_year FROM film LIMIT 10'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en puerto 3000');
});
