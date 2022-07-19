import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useCounter from "./../useCounter";

// Без этой либы идет нарушение правила трех хуков

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
});

test("increment should work fine", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
