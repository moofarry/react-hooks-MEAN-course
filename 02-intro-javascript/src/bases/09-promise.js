import {
  getHerosById
} from "./bases/08-imp-exp";

// const promise = new Promise( (resolve, reject) => {
//   setTimeout(() => {

//     const heroe = getHerosById(2);
//     resolve(hero);
//     //reject('Hero not found');
//   }, 2000);
// });

// promise.then ((hero) => {
//   console.log('hero',hero);
// })
// .catch((err) => {
//   console.warn(err);
// })

const getHerosByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const hero = getHerosById(id);
      if (hero) {
        resolve(hero);
      } else {

        reject('Hero not found');
      }
    }, 2000);
  });

}

getHerosByIdAsync(1)
  .then(console.log)
  .catch(console.warn)