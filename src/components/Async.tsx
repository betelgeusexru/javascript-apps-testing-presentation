import React, { useLayoutEffect, useState } from "react";

export const AsyncComponent = () => {
  const [isResolved, setIsResolved] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsResolved(true);
    }, 500);
  }, []);

  return (
    <div data-testid="async-component">
      {isResolved && <div data-testid="resolved-block">i am resolved</div>}
    </div>
  );
};
