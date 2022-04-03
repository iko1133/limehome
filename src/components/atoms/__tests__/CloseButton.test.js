import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import CloseButton from "../CloseButton";

describe("Testing CloseButton", () => {
  it("Renders close button", () =>
    expect(
      renderer.create(WrapInThemeProvider(<CloseButton />))
    ).toMatchSnapshot());
});
