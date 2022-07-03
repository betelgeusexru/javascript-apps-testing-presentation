import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Toggler } from "../Toggler";

describe("Component Toggler.tsx works corect", () => {
  test("toggle btn works correct", () => {
    render(<Toggler />);
    const btn = screen.getByTestId("toggler-btn");

    let notToggled = screen.queryByTestId("toggler-not-toggled");
    let toggled = screen.queryByTestId("toggler-toggled");

    expect(notToggled).toBeInTheDocument();
    expect(toggled).not.toBeInTheDocument();

    fireEvent.click(btn);

    notToggled = screen.queryByTestId("toggler-not-toggled");
    toggled = screen.queryByTestId("toggler-toggled");

    expect(notToggled).not.toBeInTheDocument();
    expect(toggled).toBeInTheDocument();
  });
});
