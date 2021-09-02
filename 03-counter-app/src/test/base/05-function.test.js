import "@testing-library/jest-dom";

import { getUser, getActiveUser } from "../../base/05-functions";

describe("test in 05-funciones", () => {
  test("getUser must be return a object ", () => {
    const userTest = {
      uid: "ABC123",
      userName: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getActiveUser must be return a object ", () => {
    const name = "Juan";
    const user = getActiveUser(name);

    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
