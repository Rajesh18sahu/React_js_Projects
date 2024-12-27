import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  return (
    <>
      <div className="calculator">
        <Display />
        <div className="buttonsContainer">
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
