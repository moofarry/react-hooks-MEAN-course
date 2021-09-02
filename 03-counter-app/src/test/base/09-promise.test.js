import { getHeroByIdAsync } from "../../base/09-promise";
import heros from "../../data/heros";

describe("test with promises", () => {
  test("should return one hero async", (done) => {
    const id = 1;
    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heros[0]);
      done();
    });
  });

  test("should  return the error if the hero by id doesnt exist", (done) => {
    const id = 10;
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe("Couldnt find the hero");
      done();
    });
  });
});
