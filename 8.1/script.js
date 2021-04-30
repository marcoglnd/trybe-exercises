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