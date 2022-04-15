import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("test in useCounter", () => {

  test("should be return default value", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(1);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("should be increment counter in 1", () => {
    const { result } = renderHook(() => useCounter(105));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(106);
  });

  test("should be decrement counter in 1", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(9);
  });

  test("should be reset counter", () => {
    const { result } = renderHook(() => useCounter(105));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(105);
  });

});
