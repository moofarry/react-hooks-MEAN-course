//destructuring

const person = {
  firstName: 'Tony',
  lastName: 'Stark',
  age: 45,
};

//const {firstName, lastName, age} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);

const useContext = ({
  firstName,
  lastName,
  age
}) => {

  // console.log(firstName,lastName);
  return {
    fullName: firstName + lastName,
    age: age,
    latlng: {
      lat: 14.23,
      lng: -23.23,
    }

  }
}

//extract nested objects and assign it to a constant
const {
  fullName,
  age,
  latlng: {
    lat,
    lng
  }
} = useContext(person)

console.log(`person`, {
  fullName,
  age
})

console.log(`latlng`, lat, lng)