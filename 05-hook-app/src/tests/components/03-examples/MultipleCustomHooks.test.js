import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("test in <MultipleCustomHooks/>", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({ counter: 93, increment: () => {} });
  });

  test("should be show correctly", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show data", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Val",
          quote: "Dear John",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Dear John");
    expect(wrapper.find("footer").text().trim()).toBe("Val");
  });
});
