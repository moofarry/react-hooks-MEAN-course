import React from "react";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { mount } from "enzyme";

import { UserContext } from "../../../components/09-useContext/UserContext";

describe("test in <AppRouter/>", () => {
  const user = {
    name: "jhon",
    email: "jhon@yopmail.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("should be show correctly", () => {

    expect(wrapper).toMatchSnapshot();
  });
});
