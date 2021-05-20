// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const foundEmployee = professionalBoard.find((employee) => employee.id === id);
  if (foundEmployee === undefined) return "ID não identificada";
  if (foundEmployee[detail] === undefined) return "Informação indisponível";
  return foundEmployee[detail];
};

describe('Testando a função searchEmployee', () => {
  it('searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toMatch('function');
  })
  it('Acha o funcionário George a partir do id 5569-4 e da chave firstName', () => {
    expect(searchEmployee('5569-4', 'firstName')).toMatch('George');
  })
  it('Retorna ID não identificada a partir do id 1234', () => {
    expect(searchEmployee('1234', 'firstName')).toMatch('ID não identificada');
  })
  it('Retorna Informação indisponível a partir do detail address', () => {
    expect(searchEmployee('5569-4', 'address')).toMatch('Informação indisponível');
  })
})