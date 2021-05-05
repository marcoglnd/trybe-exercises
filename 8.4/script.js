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

const assert = require('assert');
// const { resourceUsage } = require('node:process');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);