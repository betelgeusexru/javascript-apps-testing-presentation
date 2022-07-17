import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";
import { Counter } from "../Counter";

describe("Counter Component", () => {
  test("value is changing", () => {
    render(
      <Provider store={createReduxStore()}>
        <Counter />
      </Provider>
    );

    expect(screen.getByTestId("increment")).toBeInTheDocument();
    expect(screen.getByTestId("decrement")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("increment"));
    fireEvent.click(screen.getByTestId("increment"));

    expect(screen.getByTestId("value").textContent).toBe("2");
  });

  test("dispatch called only once", () => {
    const store = createReduxStore();
    const spy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("increment"));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
