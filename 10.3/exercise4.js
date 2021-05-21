const upperCase = (string) => {
 return string.toUpperCase();
}

const firstLetter = (string) => {
  return string[0];
}

const joinString = (string1, string2) => {
  return `${string1}${string2}`
}

module.exports = { upperCase, firstLetter, joinString }