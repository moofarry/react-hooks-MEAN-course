
// Funciones en JS
// const greeting = function( name ) {
//     return `Hello, ${ name }`;
// }

const greeting2 = ( name ) => {
    return `Hello, ${ name }`;
}

const greeting3 = ( name ) => `Hello, ${ name }`;
const greeting4 = () => `Hello world`;

export const getUser = () => ({
        uid: 'ABC123',
        userName: 'El_Papi1502'
});


const user = getUser();

// Tarea
export const getActiveUser = ( name ) =>({
    uid: 'ABC567',
    username: name
})


