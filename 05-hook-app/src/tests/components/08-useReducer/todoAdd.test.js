import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("test in <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should dont call addTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call handleAddTodo", () => {
    wrapper.find("button").simulate("click");

    const value = "Learn React";
    wrapper.find("input").simulate("change", {
      target: {
        value: value,
        name: "description",
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
