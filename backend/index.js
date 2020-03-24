const express = require('express');

const app = express(); //criando a aplicação

app.use(express.json());

//priemira rota raiz

/**
 * Rora / Recurso
 */

/**
* Métodos HTTP:
*
* GET: Buscar/listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/**
 * TIPOS DE PARAMETROS:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos "?" que server para (filtros/Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
app.post('/users/', (req, res) => {
  const body = req.body;

  console.log(body);

  return res.json({
    event: 'Semana OmniStack 11.0',
    aluno: 'Edgar Siqueira'
  });
});


app.listen(3333); //escutar porta