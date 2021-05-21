const { test, expect } = require("@jest/globals");

const math = require('./fixar');
jest.mock('./fixar');

test('testando o mock da função subtrair', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(3, 2);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(3, 2);
  expect(math.subtrair(3, 2)).toBe(1);
})

test('testando o mock da função multiplicar', () => {
  math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar.mockReturnValue(10);

  math.multiplicar(2, 5);
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar).toHaveBeenCalledWith(2, 5);
  expect(math.multiplicar(2, 5)).toBe(10);
})

test('testando o mock da função somar', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(3, 4);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(3, 4);
  expect(math.somar(3, 4)).toBe(7);
})

test('testando o mock da função dividir', () => {
  math.dividir.mockImplementation((a, b) => a / b);
  math.dividir.mockReturnValue(15);

  math.dividir(2, 5);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir).toHaveBeenCalledWith(2, 5);
  expect(math.dividir(2, 5)).toBe(15);
})