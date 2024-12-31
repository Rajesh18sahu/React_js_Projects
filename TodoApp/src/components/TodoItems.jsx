import { useContext } from "react";
import { FiTrash } from "react-icons/fi";
import { TodoItemsContext } from "../store/todoItems-store";
function TodoItems({ handleDeleteButton }) {
  const todoItems = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => (
        <div className="row items">
          <div class="col-6">{item.name}</div>
          <div class="col-4">{item.dueDate}</div>
          <div class="col-2">
            <button
              type="button"
              onClick={() => handleDeleteButton(item.name)}
              class="btn btn-danger"
            >
              Delete <FiTrash />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItems;
