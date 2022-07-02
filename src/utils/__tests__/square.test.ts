import { square } from "../square";

describe("Square util function works correct", () => {
  test("valid data", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBe(undefined);
  });

  test("Math.pow method has been called exactly only 1 times", () => {
    const spy = jest.spyOn(Math, "pow");

    square(2);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
