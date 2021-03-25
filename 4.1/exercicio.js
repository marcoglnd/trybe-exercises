//Exercício 1

// let a = 10;
// let b = 5;

// console.log('A soma de a + b é', a + b);
// console.log('A subtração de a - b é', a - b);
// console.log('A multiplicação de a * b é', a * b);
// console.log('A divisão de a / b é', a / b);
// console.log('O módulo de a % b é', a % b);

//Exercício 2

// let a = 5;
// let b = 5;

// if (a > b) {
//   console.log(a, 'é o maior número');
// } else if (a < b) {
//   console.log(b, 'é o maior número');
// } else {
//   console.log(a, 'e', b, 'são iguais');
// }

//Exercício 3

// let a = 12;
// let b = 22;
// let c = 11;

// if (a >= b && a >= c) {
//   console.log(a, 'é o maior número');
// } else if (a <= b && b >= c) {
//   console.log(b, 'é o maior número');
// } else {
//   console.log(c, 'é o maior número');
// } 

// Exercício 4

// let a = 0;

// if (a < 0) {
//   console.log('negative');
// } else if (a > 0) {
//   console.log('positive');
// } else {
//   console.log('zero');
// }

// Exercício 5

// let a = 101;
// let b = 30;
// let c = 50;

// if (a <= 0 || b <= 0 || c <= 0) {
//   console.log('erro, esse ângulo não é válido')
// } else if (a + b + c === 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//Exercício 6

// let peca = 'cavalo';

// switch(peca) {
//   case 'peão':
//     console.log('um quadrado de cada vez');
//     break;
//   case 'torre':
//     console.log('em linha reta');
//     break;
//   case 'bispo':
//     console.log('na diagonal');
//     break;
//   case 'cavalo':
//     console.log('em L');
//     break;
//   case 'rainha':
//     console.log('em todas as direções');
//     break;
//   case 'rei':
//     console.log('em todas as direções mas apenas um quadrado por vez');
//     break;
// }

// Exercício 7

// let nota = 110

// if (nota <= 100 && nota >= 90) {
//   console.log('A');
// } else if (nota < 90 && nota >= 80) {
//   console.log('B');
// } else if (nota < 80 && nota >= 70) {
//   console.log('C');
// } else if (nota < 70 && nota >= 60) {
//   console.log('D');
// } else if (nota < 60 && nota >= 50) {
//   console.log('E');
// } else if (nota < 50 && nota >= 0) {
//   console.log('F'); 
// } else {
//   console.log('Esse valor não é válido')
// }

// Exercício 8

// let a = 3;
// let b = 5;
// let c = 7;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Exercício 9

let a = 2;
let b = 4;
let c = 4;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}