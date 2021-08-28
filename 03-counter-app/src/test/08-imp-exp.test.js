import { getHeroById, getherosByOwner } from "../base/08-imp-exp";
import heros from "../data/heros";

describe("test in func heros ", () => {
  test("should be return a hero by id ", () => {
    const id = 1;
    const hero = getHeroById(id);
    const heroData = heros.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test("should be return a undefined if hero doesnt exist  ", () => {
    const id = 10;
    const hero = getHeroById(id);

    expect(hero).toBe(undefined);
  });

  test("should be return a undefined if hero doesnt exist  ", () => {
    const id = 10;
    const hero = getHeroById(id);
    
    expect(hero).toBe(undefined);
  });

  test("should be return a undefined if hero doesnt exist  ", () => {
    const owner = "DC";
    const heros = getherosByOwner(owner);
    const heroDataOwner = heros.filter((h) => h.owner === owner);

    expect(heros).toEqual(heroDataOwner);
  });

  test("should be return a undefined if hero doesnt exist  ", () => {
    const owner = "Marvel";
    const hero = getherosByOwner(owner);

    expect(hero.length).toBe(2);
  });
});
