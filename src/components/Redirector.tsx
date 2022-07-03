import React, { useCallback } from "react";
import { useNavigate } from "react-router";

export const Redirector = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <div>
      <button data-testid="redirector-btn" onClick={handleClick}>
        redirect me
      </button>
    </div>
  );
};
