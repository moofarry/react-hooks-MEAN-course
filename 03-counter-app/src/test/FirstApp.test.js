import { render } from "@testing-library/react";
import React from "react";
import FirstApp from "../FirstApp";

describe("Test in <FirstApp />", () => {
  test('should show msg "Im Goku"', () => {
    const greeting = "Im Goku";
    const { getBytext } = render(<FirstApp greeting={greeting} />);
    expect(getBytext(greeting)).toBeInTheDocument();
  });
});
