let backgroundRed = document.querySelector('.backgroundRed');
let backgroundWhite = document.querySelector('.backgroundWhite');
let backgroundYellow = document.querySelector('.backgroundYellow');
let paragraph = document.querySelector('.paragraph');
let content = document.querySelector('.content')

window.onload = function () {
  if (localStorage.backgroundColor !== undefined) {
    content.style.backgroundColor = localStorage.backgroundColor;
  }
}

backgroundRed.onclick = function() {
  localStorage.backgroundColor = 'red';
  content.style.backgroundColor = 'red';
}

backgroundWhite.onclick = function() {
  localStorage.backgroundColor = 'white';
  content.style.backgroundColor = 'white';
}

backgroundYellow.onclick = function() {
  localStorage.backgroundColor = 'yellow';
  content.style.backgroundColor = 'yellow';
}