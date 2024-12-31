import { useContext } from "react";
import { useRef } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { TodoItemsContext } from "../store/todoItems-store";

function TodoInput() {
  let todoName = useRef(0);
  let dueDate = useRef(0);

  const { addNewItem } = useContext(TodoItemsContext);

  function handleAddButtonClick() {
    let todoNameElement = todoName.current.value;
    let dueDateElement = dueDate.current.value;
    addNewItem(todoNameElement, dueDateElement);
    todoName.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
      <div class="row items">
        <div class="col-6">
          <input
            className="form-control"
            ref={todoName}
            type="text"
            placeholder="enter todo here"
          />
        </div>
        <div class="col-4">
          <input className="form-control" ref={dueDate} type="date" />
        </div>
        <div class="col-2">
          <button
            type="button"
            onClick={handleAddButtonClick}
            className="btn btn-success"
          >
            Add <FiPlusCircle />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoInput;
