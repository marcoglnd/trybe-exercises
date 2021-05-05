// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// // const evenNumbers = numbers.filter((value) => value % 2 === 0);
// // console.log(evenNumbers.reduce((acc, number) => acc + number));

// const sumEven = (acc, number) => number % 2 === 0 ? acc + number : acc;

// console.log(numbers.reduce(sumEven, 0));

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: '59' },
//       { name: 'Português', nota: '80' },
//       { name: 'Química', nota: '78' },
//       { name: 'Biologia', nota: '92' },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '76' },
//       { name: 'Português', nota: '90' },
//       { name: 'Química', nota: '70' },
//       { name: 'Biologia', nota: '80' },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '91' },
//       { name: 'Português', nota: '85' },
//       { name: 'Química', nota: '92' },
//       { name: 'Biologia', nota: '90' },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '70' },
//       { name: 'Português', nota: '70' },
//       { name: 'Química', nota: '60' },
//       { name: 'Biologia', nota: '50' },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: '80' },
//       { name: 'Português', nota: '82' },
//       { name: 'Química', nota: '79' },
//       { name: 'Biologia', nota: '75' },
//     ],
//   },
// ];

// const getBestGrade = (acc, number) => {
//   if (acc.nota > number.nota) return acc;
//   return number;
// }

// const alunosENotas = estudantes.map((value) => ({ 
//   nome: value.nome, 
//   materia: value.materias.reduce(getBestGrade).name
// }));

// console.log(alunosENotas);

// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

// const assert = require('assert');

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }

// assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// const assert = require('assert');

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// function allNames() {
//   return books.reduce((acc, curr, index) => {
//     if (index === books.length -1) {
//       return `${acc} ${curr.author.name}.` 
//     }
//     return `${acc} ${curr.author.name},`
//   }
//   , `Nomes:`);
// }

// assert.deepStrictEqual(allNames(), 'Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.');

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const assert = require('assert');

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// const expectedResult = 43;

// function averageAge() {
//   const releaseYear = books.map((value) => value.releaseYear);
//   const releaseYearSum = releaseYear.reduce((acc, curr) => acc += curr)
//   const birthYear = books.map((value) => value.author.birthYear)
//   const birthYearSum = birthYear.reduce((acc, curr) => acc += curr)
//   return (releaseYearSum - birthYearSum)/6;
// }

// assert.strictEqual(averageAge(), expectedResult);

// 4 - Encontre o livro com o maior nome.

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

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if (acc.name.length < curr.name.length) return curr;
    return acc;
  })
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
