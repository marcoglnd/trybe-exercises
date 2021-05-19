const techList = (array, name) => {
  if (array[0] === undefined) return 'Vazio!';
  array.sort();
  let newArray = [];
  array.forEach((tech) => {
    let object = {
      tech,
      name,
    }
    newArray.push(object);
  })
  return newArray;
}

module.exports = techList;