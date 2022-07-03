import { render, screen } from "@testing-library/react";
import React from "react";
import { AsyncComponent } from "../Async";

describe("Component Async.tsx works corect", () => {
  test("Resolved block renders after 1s", async () => {
    render(<AsyncComponent />);
    const resolvedBlock = await screen.findByTestId("resolved-block");

    expect(resolvedBlock).toBeInTheDocument();
  });
});
