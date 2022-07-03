import { fireEvent, render, screen } from "@testing-library/react";
import * as router from "react-router";
import { Redirector } from "../Redirector";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("Component Redirector.tsx works correct", () => {
  test("redirect works correct", () => {
    render(
      <router.MemoryRouter initialEntries={["/"]}>
        <Redirector />
      </router.MemoryRouter>
    );

    const btn = screen.getByTestId("redirector-btn");

    fireEvent.click(btn);

    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
