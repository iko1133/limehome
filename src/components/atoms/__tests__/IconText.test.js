import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import IconText from "../IconText";

// Fixing vector icons problem with jest
jest.mock(
  "@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js",
  () => {
    return () => "";
  }
);

describe("Testing IconText", () => {
  it("Renders IconText with text 'Just Text' on it", () =>
    expect(
      renderer.create(WrapInThemeProvider(<IconText text="Just Text" />))
    ).toMatchSnapshot());

  it("Renders IconText with text 'Text with location pin' on it with location pin icon on left", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <IconText text="Text with location pin" iconName="location-pin" />
        )
      )
    ).toMatchSnapshot());

  it("Renders IconText with text 'Text with star icon on right' on it with star icon on the right", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <IconText
            text="Text with star icon on right"
            iconName="star"
            iconLeft={false}
          />
        )
      )
    ).toMatchSnapshot());
});
