import "@testing-library/jest-dom";

import { getGreetings } from "../base/02-template-string";

describe("test in 02-template-string.js", () => {
  test("getGreetings must be return Hello Jhon!", () => {
    const name = "Jhon";

    const greeting = getGreetings(name);

    expect(greeting).toBe("Hello " + name + "!");
  });

  test("getGreetings must be return Hello Carlos! if not there are arguments in name", () => {
    const greeting = getGreetings();
    expect(greeting).toBe("Hello Carlos!");
  });
});
