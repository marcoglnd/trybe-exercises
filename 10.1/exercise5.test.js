const { obj1, obj2, obj3, } = require('./exercise5');

describe('exercício 5', () => {
  it('obj1 é diferente do obj2', () => {
    expect(obj1 === obj2).toBeFalsy();
  })
  it('obj2 é diferente do obj3', () => {
    expect(obj2 === obj3).toBeFalsy();
  })
  it('obj3 é diferente do obj1', () => {
    expect(obj3 === obj1).toBeFalsy();
  })
})