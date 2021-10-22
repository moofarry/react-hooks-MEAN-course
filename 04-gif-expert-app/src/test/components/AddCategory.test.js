import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("test in <AddCategory/>", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  const input = wrapper.find("input");
  const valueInput = "hello world";

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show correcly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change text box", () => {
    input.simulate("change", { target: { valueInput } });
  });

  test("Dont post the information on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  // test("should call setCategory and clean text box", () => {
  //   wrapper.find("input").simulate("change", { target: { valueInput } });
  //   wrapper.find("form").simulate("submit", { preventDefault() {} });

  //   expect(setCategories).toHaveBeenCalled();
  //   expect(setCategories).toHaveBeenCalledTimes(1);
  //   expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
  //   expect(wrapper.find("input").prop('value')).toBe("");
  // });

});
