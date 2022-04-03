import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import { FIXED_PROPERTIES } from "config/testMockingData";
import PropertyDetailsModal from "../PropertyDetailsModal";

// Fixing vector icons problem with jest
jest.mock(
  "@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js",
  () => {
    return () => "";
  }
);

describe("Testing PropertyDetailsModal", () => {
  it("Renders property details modal with property 0 on it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <PropertyDetailsModal propertyDetails={FIXED_PROPERTIES[0]} />
        )
      )
    ).toMatchSnapshot());

  it("Renders property details modal with property 1 on it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <PropertyDetailsModal propertyDetails={FIXED_PROPERTIES[1]} />
        )
      )
    ).toMatchSnapshot());

  it("Renders property details modal nonvisible", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<PropertyDetailsModal visible={false} />)
      )
    ).toMatchSnapshot());

  it("Renders property details modal nonvisible, but with propertyDetails defined", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <PropertyDetailsModal
            visible={false}
            propertyDetails={FIXED_PROPERTIES[1]}
          />
        )
      )
    ).toMatchSnapshot());
});
