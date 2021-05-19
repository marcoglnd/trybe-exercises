const { expect, describe, it } = require('@jest/globals')
const { async } = require('rsvp')
// const { describe } = require('yargs')
// const uppercase = require('./script')

// test('retorna BANANA quando passamos banana', done => {
//   uppercase('banana', (result) => {
//     expect(result).toMatch('BANANA');
//     done();
//   })
// })

const getUserName = require('./script')

// describe('quando o usuário existe', () => {
//   it('retorne o usuário Mark', () => {
//     return getUserName(4).then(user => {
//       expect(user).toEqual('Mark');
//     })
//   })
//   it('retorne o usuário Paul', () => {
//     return getUserName(5).then(user => {
//       expect(user).toEqual('Paul');
//     })
//   })
// })

// describe('quando o usuário não existe', () => {
//   it('retorna mensagem de erro', () => {
//     return getUserName(1).catch(error => {
//       expect(error).toEqual({ error: 'User with 1 not found.' })
//     })
//   })
// })

describe('quando o usuário existe', () => {
  it('retorne o usuário Mark', async () => {
    const user = await getUserName(4);
    expect(user).toEqual('Mark');
  })
  it('retorne o usuário Paul', async () => {
    const user = await getUserName(5);
    expect(user).toEqual('Paul');
  })
})

describe('quando o usuário não existe', () => {
  it('retorna mensagem de erro', async () => {
    try {
      await getUserName(1);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  })
})
