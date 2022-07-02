import { validator } from "../validator";

describe("Validator util function works correct", () => {
  test("valid data", () => {
    expect(validator(50)).toBe(true);
  });

  test("invalid data (less)", () => {
    expect(validator(-100)).toBe(false);
  });

  test("invalid data (greater)", () => {
    expect(validator(200)).toBe(false);
  });

  test("corner case data (downside)", () => {
    expect(validator(0)).toBe(true);
  });

  test("corner case data (upside)", () => {
    expect(validator(100)).toBe(true);
  });
});
