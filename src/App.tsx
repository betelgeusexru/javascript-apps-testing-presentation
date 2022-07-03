import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Router } from "./components/Router";
import { AboutPage } from "./pages/About.page";
import { ErrorPage } from "./pages/Error.page";
import { MainPage } from "./pages/Main.page";

function App() {
  return (
    <div>
      <Link to="/" data-testid="to-main-link">
        go to main
      </Link>
      <Link to="/about" data-testid="to-about-link">
        go to about
      </Link>

      <Router />
    </div>
  );
}

export default App;
