import { getHeroByIdAsync } from "../base/09-promise";

describe("test with promises", () => { 
  test("should be return one hero async", (done) => {
    const id = 1;
    getHeroByIdAsync(id)
    .then( (hero) => {
      expect(true).toBe(false)
    })
  });
});
