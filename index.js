const array = [1, 2, 3, 4, 5, 6];
console.log(array);
const index = array.indexOf(5);
if (index > -1) {array.splice(index, 1);
}
console.log(array);