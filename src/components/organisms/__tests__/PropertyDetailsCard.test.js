import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import { FIXED_PROPERTIES } from "config/testMockingData";
import PropertyDetailsCard from "../PropertyDetailsCard";

// Fixing vector icons problem with jest
jest.mock(
  "@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js",
  () => {
    return () => "";
  }
);

describe("Testing PropertyDetailsCard", () => {
  it("Renders property details card with property 0 on it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <PropertyDetailsCard propertyDetails={FIXED_PROPERTIES[0]} />
        )
      )
    ).toMatchSnapshot());

  it("Renders property details card with property 1 on it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <PropertyDetailsCard propertyDetails={FIXED_PROPERTIES[1]} />
        )
      )
    ).toMatchSnapshot());
});
