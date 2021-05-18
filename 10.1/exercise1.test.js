const sumNumbers = require('./exercise1');

describe('requisito 1', () => {
  it('soma 4 e 5 e retorna 9', () => {
    expect(sumNumbers(4, 5)).toBe(9);
  })
  it('soma 0 e 0 e retorna 0', () => {
    expect(sumNumbers(0, 0)).toBe(0);
  })
  it('retorna erro quando não é passado número', () => {
    expect(() => { sumNumbers(0, '5') }).toThrow();
  })
  it('retorna a mensagem parameters must be numbers quando dá erro', () => {
    expect(() => { sumNumbers(0, '5') }).toThrowError(new Error('parameters must be numbers'));
  })
});