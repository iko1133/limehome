import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import Button from "../Button";

// Fixing vector icons problem with jest
jest.mock(
  "@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js",
  () => {
    return () => "";
  }
);

describe("Testing Button", () => {
  it("Renders button with text 'Press' on it", () =>
    expect(
      renderer.create(WrapInThemeProvider(<Button text="Press" />))
    ).toMatchSnapshot());

  it("Renders button with text 'Press Again' on it with star icon", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(<Button text="Press again" iconName="star" />)
      )
    ).toMatchSnapshot());

  it("Renders button with text 'Press Again' on it with star icon on the right", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Button text="Press again" iconName="star" iconLeft={false} />
        )
      )
    ).toMatchSnapshot());
});
