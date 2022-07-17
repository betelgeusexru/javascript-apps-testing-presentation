import { ChangeEvent, useState } from "react";

export const ForPageTest = () => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => value === "hello" && setIsVisible((p) => !p);
  const onChagne = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div>
      <input onChange={onChagne} id="search" type="text" value={value} />
      <button id="toggle-btn" onClick={toggle}>
        toggle
      </button>

      {isVisible && <h1 id="title">i am visible</h1>}
    </div>
  );
};
