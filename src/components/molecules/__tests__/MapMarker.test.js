import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import { FIXED_PROPERTIES } from "config/testMockingData";
import MapMarker from "../MapMarker";

describe("Testing MapMarker", () => {
  it("Renders map marker with property 0 on it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<MapMarker property={FIXED_PROPERTIES[0]} />)
      )
    ).toMatchSnapshot());

  it("Renders map marker with property 1 on it, but is also selected", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <MapMarker property={FIXED_PROPERTIES[1]} isSelected />
        )
      )
    ).toMatchSnapshot());
});
