// const { describe, it, expect } = require('@jest/globals');
const getRepos = require('./exercicio4');

describe('testando a função getRepos', () => {
  it('verificando se a API tryber possui projeto todo list e meme generator', async () => {
    const listRepos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(listRepos).toContain('sd-01-week4-5-project-todo-list' && 'sd-01-week4-5-project-meme-generator');
  })
})
