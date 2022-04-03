import React from "react";
import renderer from "react-test-renderer";

import { WrapInThemeProvider } from "helpers/testsHelper";
import Button from "../Button";
import Divider from "../Divider";
import Screen from "../Screen";
import IconText from "../IconText";

describe("Testing Screen", () => {
  it("Renders Screen", () =>
    expect(renderer.create(WrapInThemeProvider(<Screen />))).toMatchSnapshot());

  it("Renders Screen with divider in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Screen>
            <Divider />
          </Screen>
        )
      )
    ).toMatchSnapshot());

  it("Renders Screen with button in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Screen>
            <Button text="Press" />
          </Screen>
        )
      )
    ).toMatchSnapshot());

  it("Renders Screen with button and iconText in it", () =>
    expect(
      renderer.create(
        WrapInThemeProvider(
          <Screen>
            <Button text="Press" />
            <IconText text="Text with icon" iconName="star" />
          </Screen>
        )
      )
    ).toMatchSnapshot());
});
