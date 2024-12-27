import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  function handleClick(buttonsText) {
    console.log("Button Clicked " + buttonsText);
    if (buttonsText === "C") {
      setCalVal("");
    } else if (buttonsText === "=") {
      let newCalVal = eval(calVal);
      setCalVal(newCalVal);
    } else {
      let newCalVal = calVal + buttonsText;
      setCalVal(newCalVal);
    }
  }

  return (
    <center>
      <div className="calculator">
        <Display DisplayValue={calVal} />
        <div className="buttonsContainer">
          <Buttons handleClick={handleClick} />
        </div>
      </div>
    </center>
  );
}

export default App;
