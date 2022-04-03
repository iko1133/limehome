import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import ImagesCarousel from "../ImagesCarousel";

const images = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    url: "https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",
  },
  { url: "https://miro.medium.com/max/800/1*meCFnZ5MK_7Fu1ogYfBvNQ.png" },
];

describe("Testing ImagesCarousel", () => {
  it("Renders images carousel with given one image", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<ImagesCarousel images={[images[0]]} />)
      )
    ).toMatchSnapshot());

  it("Renders images carousel with all images in it", () =>
    expect(
      renderer.create(WrapInThemeProvider(<ImagesCarousel images={images} />))
    ).toMatchSnapshot());
});
