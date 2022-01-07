import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("test in hook useFetchGifs", () => {
  test("should be initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Boruto")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should be return imgs array and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Boruto")
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(5);
    expect(loading).toBe(false);
  });
});
