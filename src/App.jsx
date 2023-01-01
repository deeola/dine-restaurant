import React from "react";
import { Buttons, LightButton } from "./components/Button/Button";
import Numbers from "./components/Form/Numbers";

const App = () => {
  return (
    <div className="App">
      <Buttons text={'Dark'} />
      <LightButton text={'Light'} inactive/>
      <Numbers />
    </div>
  );
};

export default App;
