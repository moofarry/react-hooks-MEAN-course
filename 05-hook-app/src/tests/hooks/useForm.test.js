import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("test in useFomr", () => {
  const initialForm = {
    name: "jhon",
    email: "jhon@yopmail.com",
  };
  test("should return default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("should change value form (name)", () => {
    //obj target.value
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Valen",
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Valen" });
  });

  test("should reStable with reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Valen",
        },
      });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
