function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
for (let index = 0; index < dezDaysList.length; index+= 1) {
  let daysOfTheMonth = document.createElement('li');
  daysOfTheMonth.classList.add('day');
  const daysUL = document.querySelector('#days');
  daysUL.appendChild(daysOfTheMonth);
  daysOfTheMonth.innerText = dezDaysList[index];
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    daysOfTheMonth.classList.add('holiday');
  }
  if (dezDaysList[index] === 04 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    daysOfTheMonth.classList.add('friday');
  }
}

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let string = 'Feriados';
let buttonsContainer = document.querySelector('.buttons-container');

function createHoliday(string) {
  let holidayButton = document.createElement('button');
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';
  buttonsContainer.appendChild(holidayButton);
}

createHoliday(string);

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let holidayButton = document.querySelector('#btn-holiday')
holidayButton.onclick = function () {
  let holidays = document.getElementsByClassName('holiday');
  if (holidays[0].style.backgroundColor === 'yellow') {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'rgb(238,238,238';
    }
  } else {
    for (let index = 0; index < holidays.length; index += 1) {
      holidays[index].style.backgroundColor = 'yellow';
    }
  }
}

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let fridayButton = document.createElement('button');
fridayButton.innerText = 'Sexta-feira';
fridayButton.id = 'btn-friday';
buttonsContainer.appendChild(fridayButton);

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let fridays = document.getElementsByClassName('friday');
let fridaysNumbers = [];
for (let index = 0; index < fridays.length; index++) {
  fridaysNumbers.push(fridays[index].innerText);
}
fridayButton.onclick = function () {
  if (fridays[0].innerText === 'SEXTOU') {
    for (let index = 0; index < fridays.length; index += 1) {
      fridays[index].innerText = fridaysNumbers[index];
    }
  } else {
    for (let index = 0; index < fridays.length; index++) {
      fridays[index].innerText = 'SEXTOU';
    }
  }
}

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
let daysContainer = document.querySelector('.days-container');
daysContainer.onmouseover = function (event) {
  event.target.style.fontSize = '2em';
}
daysContainer.onmouseout = function (event) {
  event.target.style.fontSize = null;
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"
let myTasks = document.querySelector('.my-tasks');
function assignTask(task) {
  let spanTask = document.createElement('span');
  spanTask.innerText = task;
  myTasks.appendChild(spanTask);
}

assignTask('cozinhar');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function createColor (color) {
  let colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = color;
  colorDiv.className = 'task';
  myTasks.appendChild(colorDiv);

}

createColor('red');

// Exercício 9:
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function selectTask () {
  let colorDiv = document.querySelector('.task');
  colorDiv.onclick = function () {
    if (colorDiv.className === 'task selected') {
      colorDiv.className = 'task';
    } else {
      colorDiv.className = 'task selected';
    }
  }
}

selectTask();

// Exercício 10:
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function colorDayTask () {
  let taskSelected = document.getElementsByClassName('task selected');
  daysContainer.onclick = function(event) {
    console.log(taskSelected[0]);
    if (event.target.style.color === taskSelected[0].style.backgroundColor) {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = taskSelected[0].style.backgroundColor;
    }
  }
}

colorDayTask();
