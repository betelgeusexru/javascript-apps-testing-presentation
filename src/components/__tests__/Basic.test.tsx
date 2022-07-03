import { render, screen } from "@testing-library/react";
import React from "react";
import { BasicComponent } from "../Basic";

describe("Component Basic.tsx works corect", () => {
  test("Button and input is rendered", () => {
    const { container, debug } = render(<BasicComponent />);

    //   debug();

    expect(screen.getByTestId("basic-btn")).toBeDefined();
    expect(screen.getByTestId("basic-input")).toBeDefined();
    //   expect(screen.getByTestId("basic-smth")).toBeDefined();
  });
});
