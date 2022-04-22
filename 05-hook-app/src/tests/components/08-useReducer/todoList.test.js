import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test in <TodoList/>", () => {
  const handleRemove = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleRemove={handleRemove}
      handleToggle={handleToggle}
    />
  );
  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should have two <TodoListItem/>", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleRemove")).toEqual(
      expect.any(Function)
    );
  });
});
