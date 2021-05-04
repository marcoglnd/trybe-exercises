const assert = require('assert');

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

// Exercício 1

function authorBornIn1947() {
  const foundBook = books.find((value) => value.author.birthYear === 1947);
  return foundBook.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

// Exercício 2

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  })
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// Exercício 3

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   const twentySixBook = books.find((value) => value.name.length === 26);
//   return twentySixBook;
// }

// assert.deepStrictEqual(getNamedBook(), expectedResult);

// Exercício 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const expectedResult = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

// function booksOrderedByReleaseYearDesc() {
//   const sortedBooks = books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
//   return sortedBooks;
// }

// assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

// Exercício 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((value) => value.author.birthYear > 1901);
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

// Exercício 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   return books.some((value) => value.releaseYear >= 1980 || value.releaseYear <= 1989);
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

// Exercício 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult = false;

function authorUnique() {
  return books.every((book) => books.some((value) => (book.author.birthYear === value.author.birthYear) && book.author.name !== value.author.name));
}

assert.strictEqual(authorUnique(), expectedResult);