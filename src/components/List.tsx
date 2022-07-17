import React, { FC } from "react";

type Props = {
  list?: string[];
};

export const List: FC<Props> = ({ list }) => {
  return (
    <div>
      {!Boolean(list?.length) && <h1>no items at all.</h1>}

      {Boolean(list?.length) && (
        <ul>
          <div>мы должны сломать тебя</div>
          {list?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
