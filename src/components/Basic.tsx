import React from "react";

export const BasicComponent = () => {
  return (
    <div className="wrapper">
      <button data-testid="basic-btn">click me</button>
      <input type="text" data-testid="basic-input" />
    </div>
  );
};
