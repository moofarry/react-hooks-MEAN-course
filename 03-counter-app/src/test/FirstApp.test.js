import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import FirstApp from "../FirstApp";

describe("Test in <FirstApp />", () => {

  test("should show <FirstApp /> correctly", () => {
    const greeting = "Im Goku";
    const wrapper = shallow(<FirstApp greeting={greeting} />);

    expect(wrapper).toMatchSnapshot();
  });
  test("should show subtitle correctly", () => {
    const greeting = "Im Goku";
    const subTitle = 'Im sub-Title'
    const wrapper = 
      shallow(
        <FirstApp 
          greeting={greeting} 
        />
      );

    const textP = wrapper.find('p').text();
    expect(textP).toMatchSnapshot(subTitle);
  });
});
