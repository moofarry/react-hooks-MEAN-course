// import { heros } from './data/heros';
// import { heros } from './data/heros';
// import heros, { owners } from '../data/heros';
import heros from '../data/heros';

// console.log( owners );
export const getHeroById = (id) => heros.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );
// find?, filter
export const getherosByOwner = ( owner ) => heros.filter( (heroe) => heroe.owner === owner );

// console.log( getherosByOwner('Marvel') );


