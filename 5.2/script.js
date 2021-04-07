// Acesse o elemento elementoOndeVoceEsta .
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerHTML = 'Hello World';

// Acesse o primeiroFilho a partir de pai .
let primeiroFilho = document.querySelector('#pai').firstElementChild;
console.log(primeiroFilho);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilho2);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(atencao);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
console.log(terceiroFilho);

// Agora acesse o terceiroFilho a partir de pai .
let terceiroFilho2 = document.getElementById('pai').children[2];
console.log(terceiroFilho2);

// Crie um irmão para elementoOndeVoceEsta .
let irmaoElemento = document.createElement('div');
pai.appendChild(irmaoElemento);
console.log(irmaoElemento);

// Crie um filho para elementoOndeVoceEsta .
let filhoElemento = document.createElement('div');
elementoOndeVoceEsta.appendChild(filhoElemento);
console.log(filhoElemento);

// Crie um filho para primeiroFilhoDoFilho .
let filhoDoFilhoDoFilho = document.createElement('div');
primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho)
console.log(filhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
filhoDoFilhoDoFilho.className = 'filhoDoFilhoDoFilho'
let terceiroFilho3 = document.querySelector('.filhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho3);

// Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
pai.removeChild(primeiroFilho);