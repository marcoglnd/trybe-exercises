const encode = (string) => {
  let dicionario = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (dicionario[string[index]]) {
      secondString += dicionario[string[index]];
    } else {
      secondString += string[index];
    }
  }
  return secondString;
}

const decode = (string) => {
  let dicionario = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (dicionario[string[index]]) {
      secondString += dicionario[string[index]];
    } else {
      secondString += string[index];
    }
  }
  return secondString;
}

module.exports = {encode, decode};