// Parte I
// Exercício 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortedArray = (array) => array.sort(function(a, b){return a - b});

console.log(`Os números ${sortedArray(oddsAndEvens)} estão em ordem crescente.`);

// Parte II
// Exercício 1

const fatorial = number => {
  for (let index = number - 1; index > 0; index -= 1) {
    number = number * index;
  }
  return number;
}

console.log(fatorial(5));

const fatorial2 = number => number > 1 ? number * fatorial2(number - 1) : 1;
console.log(fatorial2(5));

// Exercício 2

const longestWord = string => {
  let array = string.split(' ');
  let answer = array[0];
  for (let index = 0; index < array.length -1 ; index += 1) {
    console.log(array[index + 1].length); 
    if (array[index + 1].length > answer.length) {
      answer = array[index + 1];
    }
  }
  return answer;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));  // retorna 'aconteceu'

// Exercício 3

const button = document.getElementById('button');
const counterP = document.getElementById('counter');
let counter = 0;
button.addEventListener('click', function() {
  counterP.innerHTML = counter += 1;
});

// Exercício 4

const replace = (string1, string2) => {
  for (let index = 0; index < string1.length; index += 1) {
    if (string1[index] === 'x') {
      console.log(string2[0]);
      string1[index] = string2[0];
    }
  }
  return string1;
}

const result = replace('Tryber x aqui!', 'Bebeto');

const skills = ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

const concat = (result, skills) => {
  const stringSkills = skills.sort().join(', ')
  return `${result}: ${stringSkills}`
}

console.log(concat(result, skills));