// Exercício 1

// let n = 4;
// let linha = '';
// for (let index = 0; index < n; index++) {
//   linha = linha + '*';
// }

// for (let index = 0; index < n; index++) {
//   console.log(linha);
// }

// Exercício 2

// let n = 8;
// let linha = '';
// for (let index = 0; index < n; index++) {
//   linha = linha + '*';
//   console.log(linha);
// }

// Exercício 3

let n = 5;
let linha = '';
for (let index = 1; index <= n; index++) {
  linha = ' '.repeat(n - index) + '*'.repeat(index);
  console.log(linha);
}