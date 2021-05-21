const { it, expect, afterEach } = require('@jest/globals');
const { random } = require('lodash');
let randomNumber = require('./random');

afterEach(() => {
  randomNumber.mockClear();
})

describe('testando a função randomNumber', () => {
  it('testando retorno padrão como 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  })
  it('testando nova implementação para a função randomNumber', () => {
    jest.mock('./random');

    randomNumber.mockImplementation((a, b) => a / b);
    randomNumber(4, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(4, 2)).toBe(2);
  })
  it('testando implementar multiplicação na função randomNumber', () => {
    jest.mock('./random');

    randomNumber.mockImplementation((a, b, c) => a * b * c);
    randomNumber(2, 3, 4);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(2, 3, 4)).toBe(24);
  })
  it('testando função mock que retorna o dobro do parâmetro', () => {
    jest.mock('./random');

    randomNumber.mockImplementation((a) => 2 * a);
    randomNumber(5);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(5)).toBe(10);
  })
})