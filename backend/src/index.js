const express = require('express');
const routes = require ('./routes');

const app = express(); //criando a aplicação

app.use(express.json());
app.use(routes);

app.listen(3333); //escutar porta