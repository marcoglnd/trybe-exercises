// Exercício 1
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

//assert.deepStrictEqual(sum(4, 5), 10, '4 + 5 = 9');
//assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
//assert.strictEqual(sum(4, '5'), 9, '4 + 5 = 9');
//assert.throws(() => { sum(4, '5') });

//---------------------------

// Exercício 2

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3], 'array deveria retornar sem o 3')
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'array deveria retornar sem o 3');
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 0), [1, 2, 3, 4], 'array deveria estar intacto')
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'array deveria estar intacto')

// ----------------------------

// Exercício 3
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'array deveria retornar sem o 3');
//assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'array deveria retornar sem o 3')
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'array deveria retornar sem o 3');
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'array deveria retornar intacto');

// --------------------

// Exercício 4

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

//assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'resultado deveria ser fizzbuzz')
//assert.strictEqual(myFizzBuzz(9), 'fizz', 'resultado deveria ser fizz')
//assert.strictEqual(myFizzBuzz(25), 'buzz', 'resultado deveria ser buzz')
//assert.strictEqual(myFizzBuzz(4), 4, 'resultado deveria ser 4')
//assert.strictEqual(myFizzBuzz('mamamia'), false, 'resultado deveria ser false')

// -----------------------

// Exercício 5

// const obj1 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj2 = {
//   title: 'My Title',
//   description: 'My Description',
// };

// const obj3 = {
//   title: 'My Different Title',
//   description: 'My Description',
// };

// assert.deepStrictEqual(obj1, obj3, 'objetos são identicos');

// ------------------------

// Parte II
// Exercício 1. Escreva a função addOne para passar nos testes já implementados.

// const assert = require('assert');

// const addOne = (array) => {
//   newArray = []
//   for (let index = 0; index < array.length; index += 1) {
//     newArray[index] = array[index] + 1;
//   }
//   return newArray;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// Exercício 2
// Escreva a função wordLengths para passar nos testes já implementados.

// const assert = require('assert');

// const wordLengths = (array) => {
//   const answer = [];
//   for (let index = 0; index < array.length; index += 1) {
//     answer[index] = array[index].length;
//   }
//   return answer;
// };

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];
// const output = wordLengths(words);

// assert.strictEqual(typeof wordLengths, 'function');
// assert.deepStrictEqual(output, expected);

// Exercício 3. Escreva a função sumAllNumbers para passar nos testes já implementados.

// const assert = require('assert');

// const sumAllNumbers = (array) => {
//   let sum = 0;
//   for (let index = 0; index < array.length; index += 1) {
//     sum += array[index];
//   }
//   return sum;
// };

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// Exercício 4. Escreva a função findTheNeedle para passar nos testes já implementados.

// const assert = require('assert');

// const findTheNeedle = (array, string) => {
//   let output = -1;
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] === string) {
//       output = index;
//     }
//   }
//   return output;
// }

// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// Parte III
// Exercício 1

// const assert = require('assert');

// const greetPeople = (people) => {
//   let greeting = [];

//   for (const person in people) {
//     greeting[person] = `Hello ${people[person]}`;
//   }
//   return greeting;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
// assert.deepStrictEqual(greetPeople(parameter), result, 'error');

// Exercício 2

const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
assert.strictEqual(removeVowels(parameter), result, 'error');
