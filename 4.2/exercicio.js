// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1

// for (let index = 0; index < numbers.length ; index++) {
//   console.log(numbers[index]);
// }

// Exercício 2

// let soma = 0;
// for (let index = 0; index < numbers.length ; index++) {
//   soma = soma + numbers[index];
// }
// console.log(soma);

// Exercício 3

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for (let index = 0; index < numbers.length ; index++) {
//   soma = soma + numbers[index];
// }

// media = soma/numbers.length;
// console.log(media);

// Exercício 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for (let index = 0; index < numbers.length ; index++) {
//   soma = soma + numbers[index];
// }

// media = soma/numbers.length;
// if (media > 20) {
//   console.log('Valor maior do que 20');
// } else {
//   console.log('valor menor ou igual a 20');
// }

// Exercício 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers[0];
// for (let index = 1; index < numbers.length; index++) {
//   if (numbers[index] > maior) {
//     maior = numbers[index];
//   }
// }

// console.log(maior);

//Exercício 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0;

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 !== 0) {
//     impar++;
//   }
// }

// if (impar > 0) {
//   console.log(impar);
// } else {
//   console.log('nenhum valor ímpar encontrado');
// }

// Exercício 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = numbers[0];
// for (let index = 1; index < numbers.length; index++) {
//   if (numbers[index] < menor) {
//     menor = numbers[index];
//   }
// }

// console.log(menor);

// Exercício 8

// let array = [];

// for (let index = 1; index <= 25; index ++) {
//   array.push(index);
// }

// console.log(array);

// Exercício 9

// let array = [];

// for (let index = 1; index <= 25; index ++) {
//   array.push(index);
// }

// for (let index = 0; index < array.length; index ++) {
//   console.log(array[index]/2);
// }

// Exercício Bonus 1

// let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
// let aux = 0;

// for (let index = 0; index < numbers.length - 1; index++) {
//   for (let index2 = 0; index2 < numbers.length - index -1; index2++) {
//     if (numbers[index2] > numbers [index2 + 1]) {
//       aux = numbers[index2];
//       numbers[index2] = numbers[index2 + 1];
//       numbers[index2 + 1] = aux;
//     }
//   }
// }

// console.log(numbers);

// Exercício Bonus 2

// let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
// let aux = 0;

// for (let index = 0; index < numbers.length - 1; index++) {
//   for (let index2 = 0; index2 < numbers.length - index -1; index2++) {
//     if (numbers[index2] < numbers [index2 + 1]) {
//       aux = numbers[index2];
//       numbers[index2] = numbers[index2 + 1];
//       numbers[index2 + 1] = aux;
//     }
//   }
// }

// console.log(numbers);

// Exercício Bônus 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let secondArray = [];

for (let index = 0; index < numbers.length - 1; index++) {
  secondArray.push(numbers[index] * numbers[index + 1]);
  if (index + 2 === numbers.length) {
    secondArray.push(2 * numbers[index + 1]);
  }
}

console.log(secondArray);