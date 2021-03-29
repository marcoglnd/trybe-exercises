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

// let n = 5;
// let linha = '';
// for (let index = 1; index <= n; index++) {
//   linha = ' '.repeat(n - index) + '*'.repeat(index);
//   console.log(linha);
// }

// Exercício 4

// let n = 5;
// let meioDaPiramide = (n +1)/2;
// let linha = '';
// let leftIndex = meioDaPiramide;
// let rightIndex = meioDaPiramide;

// for (let indexLinha = 0; indexLinha <= meioDaPiramide; indexLinha++) {
//   for (let indexColuna = 0; indexColuna <= n; indexColuna++) {
//     if (indexColuna > leftIndex && indexColuna < rightIndex) {
//       linha = linha + '*';
//     } else {
//       linha = linha + ' ';
//     }
//   }
//   console.log(linha);
//   linha = '';
//   leftIndex--;
//   rightIndex++;
// }

// Exercício 5

let n = 9;
let meioDaPiramide = (n +1)/2;
let linha = '';
let leftIndex = meioDaPiramide;
let rightIndex = meioDaPiramide;

for (let indexLinha = 1; indexLinha <= meioDaPiramide; indexLinha++) {
  linha = '';
  for (let indexColuna = 1; indexColuna <= n; indexColuna++) {
    if (indexColuna === leftIndex || indexColuna === rightIndex || indexLinha === meioDaPiramide) {
      linha = linha + '*';
    } else {
      linha = linha + ' ';
    }
  }
  leftIndex--;
  rightIndex++;
  console.log(linha);
}

// Exercício 6

// let n = 9;
// let primo = 0;
// for (let index = 1; index <= n; index++) {
//   if (n % index === 0) {
//     primo++;
//   }
// }
// if (primo === 2) {
//   console.log('O número é primo');
// } else {
//   console.log('O número não é primo');
// }