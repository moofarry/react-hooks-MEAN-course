//fuction js
const getGettings = function (firstName) {
  return `Hello, ${firstName}!`;
}

//arrow fn
const getGettings2 = (firstName) => {
  return `Hello, ${firstName}!`;
}

const getGettings3 = (firstName) => `Hello, ${firstName}!`;

const getGettings4 = () => `Hello world!`;


console.log(getGettings);
console.log(getGettings2('Goku'));
console.log(getGettings3('Veguetta'));
console.log(getGettings4());


const getUser = () => ({
  uid: 'ABC123',
  userName: 'El_papi'
});

console.log(`getUser`, getUser);

/*hw
  
*/
function getActiveUser(firstName) {
  return {
    uid: 'ABC123',
    userName: firstName,
  }
};


const activeUser = getActiveUser('Fernando');
console.log(`activeUser`, activeUser)

const getActiveUser2 = (firstName) => ({
  uid: 'ABC123',
  userName: firstName,
})

const activeUser2 = getActiveUser2('Jhon');
console.log(`activeUser2`, activeUser2)