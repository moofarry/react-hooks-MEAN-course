const person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: '5551315',
    lat: 14.3232,
    lng: 34.922,
  }

};

console.log(person);
//clone object (operator spread=
const person2 = { ...person};
person2.firstName = 'Peter';
console.log(person2)
