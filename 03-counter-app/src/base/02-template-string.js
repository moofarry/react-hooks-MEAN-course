
const firstName   = 'Fernando';
const lastName = 'Herrera';

const fullName = `${ firstName } ${ lastName }`;

export function getGreetings( name = 'Carlos' ) {
    return 'Hello ' + name + '!';
}
