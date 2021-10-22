import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("test in GifGridItem", () => {
  const title = "one title";
  const url = "https://localhost/something.jpeg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should be show the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with the title  ", () => {
    const p = wrapper.find('p');
    expect(p.text().trim()) .toBe(title);
  });

  test('should have img and url with props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);

  })

  test('should have animate__fadeIn', () => {
    const div = wrapper.find('div');
    expect(div.hasClass('card')).toBe(true);
  })
  
  
});
