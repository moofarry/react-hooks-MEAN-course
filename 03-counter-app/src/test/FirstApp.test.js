import React from "react";
import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe("Test in <FirstApp />", () => {
  test('should show msg "Im Goku"', () => {
    const greeting = "Im Goku";
    
    const { getByText } = render( <FirstApp greeting={ greeting } />);

    expect( getByText(greeting) ).toBeInTheDocument();
  });
});
