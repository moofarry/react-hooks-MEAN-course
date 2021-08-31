import { returnArray } from "../base/07-deses-arr";

describe("test in  07-deses.arr", () => {
  test("should be return two args : string and number", () => {
    const [letters, numbers] = returnArray(); //['ABC', 123]

    expect(letters).toBe("ABC");
    expect(typeof letters).toBe("string");

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe("number");
  });


  
});
