const myRemoveWithoutCopy = require('./exercise3');

describe('exercício 3', () => {
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('myRemoveWithoutCopy([1, 2, 3, 4], 4) retorna [1, 2, 3]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
  })
  it('myRemoveWithoutCopy([1, 2, 3, 4], 5 retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})