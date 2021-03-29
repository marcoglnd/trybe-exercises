// Exercícios de fixação Objetos

// let player = {
//   nome: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { golden: 2, silver: 3 }
// };

// console.log('A jogadora', player['nome'], player['lastName'], 'tem', player['age'], 'anos de idade.');

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora', player['nome'], player['lastName'], 'foi eleita a melhor do mundo por', player['bestInTheWorld'].length, 'vezes');

// console.log('A jogadora possui', player['medals']['golden'], 'medalhas de ouro e', player['medals']['silver'], 'medalhas de prata');

// Exercícios de fixação For In

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// } 

// for (let index in names) {
//   console.log('Olá', names[index]);
// }

// let carro = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// }

// for (let index in carro) {
//   console.log(index + ':', carro[index]);
// }

// Exercício fixação Function

// function soma (a, b) {
//   return a + b;
// }

// function subtracao (a, b) {
//   return a - b;
// }

// function multiplicacao (a, b) {
//   return a * b;
// }

// function divisao (a, b) {
//   return a / b;
// }

// function modulo (a, b) {
//   return a % b;
// }

// console.log(soma(2, 3));
// console.log(subtracao(5, 2));
// console.log(multiplicacao(10, 2));
// console.log(divisao(4, 2));
// console.log(modulo(20, 2));

// Exercícios Parte I - Objetos e For In
// Exercício 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vinda,', info.personagem);

// Exercício 2

info.recorrente = 'Sim';
console.log(info);

// Exercício 3

for (let index in info) {
  console.log(index);
}

// Exercício 4

for (let index in info) {
  console.log(info[index]);
}

let secondInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let index in info) {
  console.log(info[index], 'e', secondInfo[index]);
}