const { it, expect } = require('@jest/globals');
const { upperCase, firstLetter, joinString } = require('./exercise4');

jest.mock('./exercise4');

describe('Testando mock implementation em funções de string', () => {
  it('Função uppercase agora retorna em caixa baixa', () => {
    upperCase.mockImplementation((string) => string.toLowerCase());
    upperCase('MARCO');

    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase('MARCO')).toMatch('marco');
  })
  it('Função firstLetter agora retorna a última letra', () => {
    firstLetter.mockImplementation((string) => string[string.length - 1]);
    firstLetter('Marco');

    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter('Marco')).toMatch('o');
  })
  it('Função joinString agora junta 3 strings', () => {
    joinString.mockImplementation((string1, string2, string3) => `${string1}${string2}${string3}`)
    joinString('Marco', 'Antonio', 'Galindo');

    expect(joinString).toHaveBeenCalled();
    expect(joinString).toHaveBeenCalledTimes(1);
    expect(joinString('Marco', 'Antonio', 'Galindo')).toMatch('MarcoAntonioGalindo');
  })
})