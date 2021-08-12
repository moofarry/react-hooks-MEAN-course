// array js
const array = [1, 2, 3, 4];

let array2 = [...array]
array2.push(5)

//callback
const array3 = array2.map(function (number) {
  return number * 2;
});

console.log(array);
console.log(array2);
console.log(array3);