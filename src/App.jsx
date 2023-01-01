import React from "react";
import { Buttons, LightButton } from "./components/Button/Button";

const App = () => {
  return (
    <div className="App">
      <Buttons text={'Dark'} />
      <LightButton text={'Light'} inactive/>
    </div>
  );
};

export default App;
