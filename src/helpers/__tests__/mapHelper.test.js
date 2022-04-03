import { fixObjectLocationProperty } from "helpers/mapHelper";
import { PROPERTIES } from "config/testMockingData";

describe("Testing mapHelper", () => {
  it("Renames property location's properties with map appropriate names", () =>
    expect(fixObjectLocationProperty(PROPERTIES[0])).toHaveProperty(
      "location"
    ));

  it("Renames property location's properties with map appropriate names", () =>
    expect(fixObjectLocationProperty(PROPERTIES[0]).location).toHaveProperty(
      "longitude",
      13.3164893
    ));

  it("Renames property location's properties with map appropriate names", () =>
    expect(fixObjectLocationProperty(PROPERTIES[1]).location).toHaveProperty(
      "latitude",
      52.52259309999999
    ));
});
