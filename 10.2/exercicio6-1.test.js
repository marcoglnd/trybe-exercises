const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const arrayAge = Animals.filter((animal) => animal.age === age);
      if (arrayAge.length !== 0) {
        return resolve(arrayAge);
      }
      return reject('Nenhum animal com essa idade!')
    }, 100)
  })
};

const getAnimal = (age) => {
  return findAnimalByAge(age).then((animal) => animal);
};

describe('Teste da função findAnimalByAge', () => {
  it('Retorna um array quando a idade for 5', () => {
    expect.assertions(1);
    return getAnimal(5).then((animal) => {
      expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }])
    })
  })
  it('Retorna um erro quando a idade for 10', () => {
    expect.assertions(1);
    return getAnimal(10).catch((error) => {
      expect(error).toEqual('Nenhum animal com essa idade!');
    })
  })
})