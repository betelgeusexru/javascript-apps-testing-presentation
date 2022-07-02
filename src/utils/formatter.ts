export const formatter = (arr: number[]) =>
  arr.filter((item) => Number.isInteger(item)).map(String);
