import { RootState } from "../../../../store";
import { getCounterValue } from "../getCounterValue";

describe("getCounterValue", () => {
  test("work with empty preloaded state", () => {
    expect(getCounterValue({} as RootState)).toBe(0);
  });

  test("work with preloaded state", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
