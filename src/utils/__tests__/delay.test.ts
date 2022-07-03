import { delay } from "../delay";

describe("Delay util function works correct", () => {
  test("valid data", async () => {
    const TEST_NUMBER = 5;
    const sum = await delay(() => TEST_NUMBER + TEST_NUMBER, 1000);

    expect(sum).toBe(TEST_NUMBER * 2);
  });
});
