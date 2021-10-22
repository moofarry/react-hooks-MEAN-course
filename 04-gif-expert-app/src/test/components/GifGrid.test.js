import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("test in GifGrid", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const category = "Naruto";

  test("should show correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when img is load useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://google.com",
        title: "ABC Title",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
