const characters = ['Goku', 'Vegetta', 'Trunks'];

const [, , p3] = characters;
console.log(p3);

const returnArr = () => {
  return ['ABC', 123];
}

const [letters, numbers] = returnArr();
console.log(letters, numbers)

//Homework

const useState = (value) => {
  return [value, () => {
    console.log('Hello world')
  }];
}

const [name , setName] = useState('Goku');
setName();