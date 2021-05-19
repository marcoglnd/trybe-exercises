const myFizzBuzz = require('./exercicio4');

describe('exercício 4', () => {
  it('myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  })
  it('myFizzBuzz(9) retorna fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  })
  it('myFizzBuzz(10) retorna buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  })
  it('myFizzBuzz(8) retorna 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  })
  it('myFizzBuzz(oi) retorna false', () => {
    expect(myFizzBuzz('oi')).toBeFalsy();
  })
});