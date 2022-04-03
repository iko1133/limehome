import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import Divider from "../Divider";

describe("Testing Divider", () => {
  it("Renders Divider", () =>
    expect(
      renderer.create(WrapInThemeProvider(<Divider />))
    ).toMatchSnapshot());
});
