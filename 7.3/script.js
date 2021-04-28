// Exercício 1
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

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

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3], 'array deveria retornar sem o 3')
//assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'array deveria retornar sem o 3');
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 0), [1, 2, 3, 4], 'array deveria estar intacto')
//assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'array deveria estar intacto')