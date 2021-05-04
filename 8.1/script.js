// Exercício 1

const createEmail = (nome) => {
  let email = '';
  for (let index = 0; index < nome.length; index += 1) {
    if (nome[index] === ' ') {
      email += '_';
    } else {
      email += nome[index];
    }
  }
  return `${email}@betrybe.com`;
}

const employeeEmail = (nome) => {
  const employee = {
    nomeCompleto: nome,
    email: createEmail(nome),
  }
  return employee;
}

const newEmployees = (makeEmail) => {
  const employees = {
    id1: makeEmail('Pedro Guerra'),
    id2: makeEmail('Luiza Drumond'),
    id3: makeEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employeeEmail));

// Exercício 2

const match = (num1, num2) => {
  console.log(num1);
  if (num1 === num2) {
    return 'Parabéns, você ganhou!';
  }
  return 'Tente novamente!'
}

const draw = (func, num2) => {
  drawNumber = Math.floor(Math.random() * 5) + 1;
  func = func(drawNumber, num2)
  return func;
}

console.log(draw(match, 3));

// Bônus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1. Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => Math.floor(Math.random() * dragon.strength) + 15;
console.log(dragonDamage());

// 2. Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => Math.floor(Math.random() * warrior.strength * warrior.weaponDmg) + warrior.strength;
console.log(warriorDamage());

// 3. Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = () => {
  mageDamageDetails = {
    mDamage: Math.floor(Math.random() * mage.intelligence * 2) + mage.intelligence,
    manaLeft: mage.mana - 15,
  }
  if (mageDamageDetails.manaLeft < 15) {
    return `Não possui mana suficiente`;
  }
  return mageDamageDetails;
}

// Parte II
// 1. Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .

// 2. Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorAtack = warriorDamage();
    warrior.damage = warriorAtack;
    dragon.healthPoints -= warriorAtack;
  },
  mageTurn: (mageDamage) => {
    const mageAttack = mageDamage();
    mage.damage = mageAttack.mDamage;
    dragon.healthPoints -= mageAttack.mDamage;
    mage.mana = mageAttack.manaLeft;
  }
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
console.log(mage.damage);
console.log(mage.mana);
console.log(dragon.healthPoint);