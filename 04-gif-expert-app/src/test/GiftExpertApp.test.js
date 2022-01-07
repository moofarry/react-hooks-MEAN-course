import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("test in GiftExpertApp.", () => {
  test("should be show the component", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should be  show a list categories", () => {
    const categories = ["Naruto", "Dragon"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find("GifExpertApp").length).toBe(categories.length);
  });
});
