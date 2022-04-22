import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("test in todoReducer", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("should add TODO", () => {
    const newTodo = {
      id: new Date().getTime(),
      description: "Learn Express",
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  test("should remove TODO", () => {
    const action = {
      type: "remove",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toEqual(1);
    expect(state).toEqual([demoTodos[1]]);
  });
  test("should TOGGLE of TODO", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);

    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
