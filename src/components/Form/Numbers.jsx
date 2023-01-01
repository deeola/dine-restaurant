import React, { useState } from "react";
import { NormalNumb, Control } from "./Styles/NumberStyle";

const Numbers = () => {
  const [number, setNumber] = useState(0);

  const numberFunc = (type) => {
    if (type === "decrease") {
      if (number > 0) {
        return setNumber(number - 1);
      }
      return null;
    } else {
      if (number === 0 || number > 0) {
        return setNumber(number + 1);
      }
    }
  };

  return (
    <NormalNumb>
      <Control onClick={() => numberFunc("decrease")}>-</Control>
      <div>{number} people</div>
      <Control onClick={() => numberFunc()}>+</Control>
    </NormalNumb>
  );
};

export default Numbers;
