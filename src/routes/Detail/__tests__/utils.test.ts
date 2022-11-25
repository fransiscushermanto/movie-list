import { getMetascoreLevel } from "../utils";

describe("getMetascoreLevel", () => {
  it("should return correct value", () => {
    expect(getMetascoreLevel(10)).toBe("bad");
    expect(getMetascoreLevel(50)).toBe("good");
    expect(getMetascoreLevel(75)).toBe("excellence");
  });
});
