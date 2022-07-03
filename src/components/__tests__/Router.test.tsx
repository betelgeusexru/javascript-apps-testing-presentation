import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import App from "../../App";

describe("Component Router.tsx works correct", () => {
  test("Error page appears", () => {
    render(
      <MemoryRouter initialEntries={["/beer"]}>
        <App />
      </MemoryRouter>
    );

    const page = screen.getByTestId("errorpage-root");
    expect(page).toBeInTheDocument();
  });

  test("Link to AboutPage works correct", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const linkToAbout = screen.getByTestId("to-about-link");

    let aboutPage = screen.queryByTestId("aboutpage-root");
    let mainPage = screen.queryByTestId("mainpage-root");

    expect(linkToAbout).toBeInTheDocument();

    expect(aboutPage).not.toBeInTheDocument();
    expect(mainPage).toBeInTheDocument();

    fireEvent.click(linkToAbout);

    aboutPage = screen.queryByTestId("aboutpage-root");
    mainPage = screen.queryByTestId("mainpage-root");

    expect(aboutPage).toBeInTheDocument();
    expect(mainPage).not.toBeInTheDocument();
  });
});
