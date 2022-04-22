import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("test in useFetch", () => {
  test("should return default data", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { loading, error, data } = result.current;
    expect(loading).toBe(true);
    expect(error).toBe(null);
    expect(data).toBe(null);
  });

  test("should data,  loading false, error false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate({timeout:2000});

    const { loading, error, data } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  test("should catch error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/apid/quotes/1")
    );
    await waitForNextUpdate({timeout:2000});

    const { loading, error, data } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("could not load the data");
  });
});
