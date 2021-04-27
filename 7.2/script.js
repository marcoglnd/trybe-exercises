// Parte I

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N˚ ${order.address.number}, Apto. ${order.address.apartment}`);
// }

// customerInfo(order);

// const orderModifier = (order) => {
//   const newOrder = Object.assign({}, order);
//   newOrder.name = 'Luiz Silva';
//   // Object.keys(newOrder.order.pizza)[0] = 'muzzarela';
//   // Object.keys(newOrder.order.pizza)[1] = 'calabresa';
//   newOrder.payment.total = 50;
//   console.log(`Olá ${newOrder.name}, o total do seu pedido de ${Object.keys(newOrder.order.pizza)[0]}, calabresa e ${newOrder.order.drinks.coke.type} é R$ ${newOrder.payment.total},00.`);
// }

// orderModifier(order);

// Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

function addTurn(object, key, value) {
  key = 'turno'
  object.key = value;
}

addTurn(lesson2, 'turno', 'manhã')
console.log(lesson2);

// Exercício 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function listKeys(object) {
  console.log(Object.keys(object));
}

listKeys(lesson1)

// Exercício 3. Crie uma função para mostrar o tamanho de um objeto.

function sizeObject(object) {
  console.log((Object.keys(object).length));
}

sizeObject(lesson1)

// Exercício 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function valuesObject(object) {
  console.log(Object.values(object));
}

valuesObject(lesson1);

// Exercício 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

