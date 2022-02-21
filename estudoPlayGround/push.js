const estudantes = require('./arrayEstudantes.js')

const fernando = {
    nome: 'Fernando',
    sobrenome: 'Stentzler',
    idade: 28,
    turno: 'Manhã',
    materias: [ 
    { name: 'Matemática', nota: 67 },
    { name: 'Português', nota: 79 },
    { name: 'Química', nota: 70 },
    { name: 'Biologia', nota: 65 }, ]
  }

  const adicionarEstudante = (estudante) => {
    estudantes.push(estudante)
  }
  
adicionarEstudante(fernando)

console.log(estudantes)