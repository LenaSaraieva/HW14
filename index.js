const input = ['red', 'green', 'blue'];

removeElement(input, 3);

console.log(input);

function removeElement(array, item) {
  const index = array.indexOf('green');

  if (index > -1) {
    array.splice(index, 1);
  }  
}