// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let body = document.querySelector('.body');
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(titulo);

// Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div');
mainContent.className = 'main-content';
body.appendChild(mainContent);

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');
centerContent.appendChild(paragraph);
paragraph.innerText = 'Olá, Mundo'

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let smallImage = document.createElement('img');
smallImage.className = 'small-image';
smallImage.src = 'https://picsum.photos/200';
leftContent.appendChild(smallImage);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let uList = document.createElement('ul');
let textList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < 10; index += 1) {
  let listItem = document.createElement('li');
  listItem.innerText = textList[index]
  uList.appendChild(listItem);
}
rightContent.appendChild(uList);

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  let heading3 = document.createElement('h3');
  mainContent.appendChild(heading3);
  heading3.innerText = 'Ola'
}

// 1 - Adicione a classe title na tag h1 criada;
titulo.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas;
let h3s = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
  h3s[index].className = 'description';
}

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
mainContent.removeChild(leftContent);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
rightContent.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
centerContent.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
for (let index = 0; index < 2; index +=1) {
  uList.removeChild(uList.lastElementChild);
}
