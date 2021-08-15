import heros from "../data/heros";


export const getHerosById = (id) => heros.find((hero) => hero.id === id);
//console.log(getHerosById(2));

//filter hero by owner
export const getHerosByOwner = (owner) => heros.filter((hero) => hero.owner === owner);
// console.log(getHerosByOwner("DC"));

// console.log(`owners`, owner)