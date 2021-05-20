const hydrate = (bebida) => {
  const drinks = bebida.replace(/\D/g, '');
  const numberOfDrinks = drinks.split('').map((number) => parseInt(number, 10))
  const cups =  numberOfDrinks.reduce((acc, curr) => acc + curr);
  if (cups === 1) return `${cups} copo de água`;
  return `${cups} copos de água`;
}

module.exports = hydrate;