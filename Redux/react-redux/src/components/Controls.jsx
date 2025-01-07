import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatchCounter = useDispatch();
  function handleAdd() {
    dispatchCounter({ type: "ADD" });
  }

  function handleSubtract() {
    dispatchCounter({ type: "SUBTRACT" });
  }
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-primary" onClick={handleAdd}>
        +1 ADD
      </button>

      <button type="button" class="btn btn-success" onClick={handleSubtract}>
        -1 SUBTRACT
      </button>
    </div>
  );
};

export default Controls;
