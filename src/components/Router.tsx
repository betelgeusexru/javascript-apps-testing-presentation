import React from "react";
import { Route, Routes } from "react-router";
import { AboutPage } from "../pages/About.page";
import { ErrorPage } from "../pages/Error.page";
import { MainPage } from "../pages/Main.page";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
