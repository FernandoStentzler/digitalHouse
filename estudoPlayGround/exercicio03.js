// A constante abaixo servira de base para que possamos relaizar as funções descritas abaixo dela:

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  //  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  // Dica: use a função find .
  function authorBornIn1947(array, ano) {
    let auxiliar = array.find( livro => livro.author.birthYear === ano)
    return `${auxiliar.author.name}`
  }
  
  // 2 - Retorne o nome do livro de menor nome
  //Dica use a função forEach 
  function smallerName(array) {
    let nameBook 
    array.forEach(livro => {nameBook = livro.name.length
    if(livro.name.length < nameBook.length){
    nameBook = livro.name
    }
    return nameBook;
  });
  
    // Variável nameBook que receberá o valor do menor nome;
    
  }
  
  // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
  function getNamedBook(array) {

    // escreva seu código aqui
  }
  
  // 4 - Ordene os livros por data de lançamento em ordem decrescente.
  // Dica Utiliza a função sort.
  function booksOrderedByReleaseYearDesc(array) {
    let auxiliar = array.sort((a, b) => b.author.birthYear - a.author.birthYear)
    return auxiliar
  }
  
  // 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
  function everyoneWasBornOnSecXX(array, seculo) {
  array.map(element => element.author.birthYear === seculo)
  return 
  }

  // console.log(authorBornIn1947(books, 1947))

  // console.log(everyoneWasBornOnSecXX(books, 20))

  // console.log(booksOrderedByReleaseYearDesc(books))

  console.log(smallerName(books))