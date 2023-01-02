import React from "react";
import { Buttons, LightButton } from "./components/Button/Button";
import Numbers from "./components/Form/Numbers";
import TextField from "./components/Form/TextField";

const App = () => {
  return (
    <div className="App">
      <Buttons text={'Dark'} />
      <LightButton text={'Light'} inactive/>
      <Numbers />
      <TextField type='text' placeholder='name' value={'Adeola'}/>
      <TextField type='email' placeholder='email' value={'clazikar@gmail.com'}/>
    </div>
  );
};

export default App;
