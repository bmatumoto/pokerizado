const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send(`Project Pokerizado rodando na porta: ${port}`);
})

app.get('/pokemon', (_req, res) => {
  res.status(200).json({ port });
})

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}`);
})