import { formatter } from "../formatter";

// Этот тест будет падать, потому что используется метод toBe
// Которая сравнивает значение, но не содержимое

// Для массивов (простых) и объектов (так же простых) корректно и правильно использовать именно метод toEqual
// Для сложных вложенных объектов и массивов корректно использовать toStrictEqual

// Неправильно
// describe("Formatter util function works correct", () => {
//   test("valid data", () => {
//     expect(formatter([1, 2, 3])).toBe(["1", "2", "3"]);
//   });
// });

// Правильно
describe("Formatter util function works correct", () => {
  test("valid data", () => {
    expect(formatter([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("invalid data (mashup)", () => {
    // @ts-ignore
    expect(formatter([1, 2, 3, null, undefined, "some-string"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("invalid data (empty array)", () => {
    expect(formatter([])).toEqual([]);
  });

  test("deny", () => {
    expect(formatter([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4]);
  });
});
