const seletorEstado = document.getElementById('seletor-estado');

const arrayEstado = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

const arrayValueEstado = ['ac', 'al', 'ap', 'am', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'rs', 'ro', 'rr', 'sc', 'sp', 'se', 'to'];

for (let index = 0; index < arrayEstado.length; index += 1) {
  const estado = document.createElement('option');
  estado.innerText = arrayEstado[index];
  estado.setAttribute('value', arrayValueEstado[index]);
  seletorEstado.appendChild(estado);
}

// const limparButton = document.getElementById('limpar');
// limparButton.onclick = function() {
//   document.innerText = '';
// }

const dataInicio = document.getElementById('data-inicio');

const submitButton = document.getElementById('submit-button');
const resumoCurriculo = document.getElementById('resumo-curriculo');

// function gerarCurriculo(event) {
//   // let dataInicioSplit = dataInicio.value.split('/');
//   // if (dataInicioSplit[0] < 0 || dataInicioSplit[0] > 31) {
//   //   alert('Digite uma data válida!');
//   // } else if (dataInicioSplit[1] < 0 || dataInicioSplit[1] > 12) {
//   //   alert('Digite uma data válida!');
//   // } else if (dataInicioSplit[2] < 0) {
//   //   alert('Digite uma data válida!');
//   // } else {
//     const inputs = document.getElementsByTagName('input');
//     event.preventDefault();
//     for (let index = 0; index < inputs.length; index += 1) {
//       if (inputs[index].type === 'radio') {
//         if (inputs[index].checked) {
//           resumoCurriculo.innerText += inputs[index].value + '\n';
//         }
//       } else {
//         resumoCurriculo.innerText += inputs[index].value + '\n';
//       }
//     }
//   resumoCurriculo.innerText += seletorEstado.value;
//   }


// submitButton.addEventListener('click', gerarCurriculo);

validation.init();

validation.init("#myForm");

validation.init("#myForm", {
  events: ["change", "paste", "keyup"]
});