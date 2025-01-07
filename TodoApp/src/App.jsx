import { useReducer } from "react";
import "./App.css";
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItemsContext } from "./store/todoItems-store";
import WelcomeMessege from "./components/WelcomeMessege";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.name,
        dueDate: action.payload.dueDate,
      },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }

  return newTodoItems;
};

function App() {
  //const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function addNewItem(name, dueDate) {
    let addNewAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        dueDate,
      },
    };
    dispatchTodoItems(addNewAction);
  }

  function deleteItem(todoItemDelete) {
    let deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        name: todoItemDelete,
      },
    };
    dispatchTodoItems(deleteAction);
  }

  return (
    <center>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <TodoHeading />
        <div className="todoItemContainer">
          <TodoInput />
          <WelcomeMessege />
          <TodoItems />
        </div>
      </TodoItemsContext.Provider>
    </center>
  );
}

export default App;
