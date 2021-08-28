
// Desestructuración
// Asignación Desestructurante
const character = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

const usContext = ({ key, name, edad: age, range = 'captain' }) => {

    return {
        keyName: key,
        ageC: age,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { keyName: keyName, age: ageC, latlng: { lat, lng } } = usContext( character );
console.log(keyName, age);
console.log( lat, lng );


