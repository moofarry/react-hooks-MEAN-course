import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Test in <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should show <CounterApp /> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show subtitle correctly", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = wrapper.find("h2").text().trim();
    expect(counterValue).toBe(`${value}`);
  });

  test("should increase the value in 1 with button +1", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("101");
  });

  test("should decreases the value in 1 with button -1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("99");
  });

  test("should set default value with button reset", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const counterText = wrapper.find("h2").text().trim();
    wrapper.find("button").at(1).simulate("click");
    expect(counterText).toBe("100");
  });
});
