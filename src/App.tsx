import React from "react";
import { Routes, Route } from "react-router-dom";
import { ForPageTest } from "./pages/ForTestPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>main page</h1>} />
        <Route path="/for_test_page" element={<ForPageTest />} />
      </Routes>
    </div>
  );
}

export default App;
