const express  = require('express');

const server = express();

server.use(express.json())

// Query Params = parametros que passamos na frente da rota 
// Ex: ?nome=NodeJS
// Route Params = /curso/2
// Request Body = {nome: 'nodejs', tipo: 'backend'}



/*server.get('/curso/:id', (req, res) => {7
  const id = req.params.id;
  return res.json({`Curso: ${id}`});
} */

//Exemplo abaixo de Query Params
  // const nome = req.query.nome;
  // return res.json({curso: `Aprendendo ${nome}`});

const cursos = ['Node JS', 'JavaScript', 'React Native'];

server.get('/cursos', (req, res) => {
  return res.json(cursos)
})



server.get('/cursos/:index', (req, res) => {

  const {index} = req.params;
    return res.json (cursos[index])

  
})

server.post('/cursos', (req, res) => {
  const {name} = req.body
  cursos.push(name)

  return res.json(cursos)

})
 
server.put('/cursos/:index', (req, res) => {
  const {index} = req.params
    const{name} = req.body

    cursos[index] = name
 
    return res.json(cursos)


})

server.delete('cursos/:index', (req, res) => {
  const {index} = req.params
  
    return res.json(cursos)
})


server.listen(3001)

