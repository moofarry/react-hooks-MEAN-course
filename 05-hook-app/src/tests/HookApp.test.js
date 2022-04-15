import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("test in <HookApp/>", () => {
  test("should show correctly", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
