const express = require('express');

const routes = express.Router();

routes.post('/users/', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    event: 'Semana OmniStack 11.0',
    aluno: 'Edgar Siqueira'
  });
});

module.exports = routes;