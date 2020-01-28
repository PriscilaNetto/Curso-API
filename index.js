const express  = require('express');

const server = express();

// Query Params = parametros que passamos na frente da rota 
// Ex: ?nome=NodeJS
// Route Params = /curso/2
// Request Body = {nome: 'nodejs', tipo: 'backend'}



/*server.get('/curso/:id', (req, res) => {
  const id = req.params.id;
  return res.json({`Curso: ${id}`});
} */

//Exemplo abaixo de Query Params
  // const nome = req.query.nome;
  // return res.json({curso: `Aprendendo ${nome}`});

const cursos = ['Node JS', 'JavaScript', 'React Native'];


server.get('/curso/:index', (req, res) => {

  const {index} = req.params;
    return res.json (cursos[index])

  
})
server.listen(3001);

