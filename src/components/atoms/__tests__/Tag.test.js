import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import Tag from "../Tag";

describe("Testing Tag", () => {
  it("Renders Tag with 'Small tag' text in it", () =>
    expect(
      renderer.create(WrapInThemeProvider(<Tag text="Small tag" />))
    ).toMatchSnapshot());

  it("Renders Tag with 'THIS IS A BIG, LONG, HUGE TAG' text in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<Tag text="THIS IS A BIG, LONG, HUGE TAG" />)
      )
    ).toMatchSnapshot());
});
