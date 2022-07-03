import React, { useState } from "react";

export const Toggler = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {isToggled && <div data-testid="toggler-toggled">toggled</div>}
      {!isToggled && <div data-testid="toggler-not-toggled">not toggled</div>}
      <button onClick={() => setIsToggled((p) => !p)} data-testid="toggler-btn">
        toggle
      </button>
    </div>
  );
};
