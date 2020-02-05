const express  = require('express');

const server = express();

server.use(express.json());

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


//exemplo de um middleware global e usando o next() ele continua, não trava sem colocar nenhuma rota.
server.use((req, res, next) => {

  console.log(`URL chamada ${req.url}`);

  return next();
  
});


//usado para verificar se tem o nome do curso. Middleware
function checkCurso (req, res, next){
  if(!req.body.name){
    return res.send("Nome do curso inválido!")
  }
  return next()
}

function checkIndexCurso(req, res, next) {
  const curso = cursos[req.params.index]
  
  if(!curso){
    return res.send("Id inválido!");
  }

  req.curso = curso; 

  return next();
}

server.get('/cursos', (req, res) => {
  return res.json(cursos)
});

 // exemplo rota usando middleware
server.get('/cursos/:index', checkIndexCurso, (req, res) => {

    return res.json (req.curso); //não preciso colocar params uma vez que declarei a const(req.curso) na function.
  
});


server.post('/cursos', checkCurso, (req, res) => {
  const {name} = req.body;
  cursos.push(name);

  return res.json(cursos);

});
 
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
  const {index} = req.params;
    const{name} = req.body;

    cursos[index] = name;
 
    return res.json(cursos);


});

server.delete('/cursos/:index', checkIndexCurso,  (req, res) => {
  const {index} = req.params;

  cursos.splice(index, 1); //remove um elemento do índice que será passado no params. 
  
    return res.send("Curso excluído com sucesso!");
});


server.listen(3001);

