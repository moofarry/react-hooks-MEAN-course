import { getHeroeById } from "./09-promise";

export  const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("Couldn't find the hero");
      }
    }, 1500);
  });
};

