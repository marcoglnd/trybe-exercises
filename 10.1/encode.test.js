const {encode, decode} = require('./encode');

describe('teste da função encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toMatch('function');
  })
  it('decode é uma função', () => {
    expect(typeof decode).toMatch('function');
  })
  it('encode converte a, e, i, o, u em 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toMatch('12345');
  })
  it('decode converte 1, 2, 3, 4, 5 em a, e, i, o, u', () => {
    expect(decode('12345')).toMatch('aeiou');
  })
  it('encode converte bdcf em bcdf', () => {
    expect(encode('bcdf')).toMatch('bcdf');
  })
  it('decode converte 6789 em 6789', () => {
    expect(decode('6789')).toMatch('6789');
  })
  it('encode banana tem mesmo tamanho de b1n1n1', () => {
    expect(encode('banana').length).toBe(('banana').length);
  })
  it('decode b1n1n1 tem mesmo tamanho de banana', () => {
    expect(decode('b1n1n1').length).toBe(('b1n1n1').length);
  })
})