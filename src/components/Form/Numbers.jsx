import React, { useState } from "react";
import { NormalNumb, Control, MainDisplay } from "./Styles/NumberStyle";

const Numbers = ({ inactive = false }) => {
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
    <NormalNumb inactive={inactive}>
      <Control onClick={() => numberFunc("decrease")}>-</Control>
      <MainDisplay>{number} people</MainDisplay>
      <Control onClick={() => numberFunc()}>+</Control>
    </NormalNumb>
  );
};

export default Numbers;
