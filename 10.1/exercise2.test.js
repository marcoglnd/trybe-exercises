const myRemove = require('./exercise2');

describe('requisito 2', () => {
  it('myRemove([1, 2, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  })
  it('myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('myRemove([1, 2, 3, 4], 0) não sofre alterações', () => {
    expect(myRemove([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
  })
  it('myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});