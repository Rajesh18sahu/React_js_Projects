import { useState } from "react";
import "./App.css";
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItemsContext } from "./store/todoItems-store";
import WelcomeMessege from "./components/WelcomeMessege";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  function addNewItem(name, dueDate) {
    console.log("todo " + name + " date " + dueDate);
    let newItemsAdd = [
      ...todoItems,
      {
        name: name,
        dueDate: dueDate,
      },
    ];
    setTodoItems(newItemsAdd);
  }

  function deleteItem(todoItemDelete) {
    let newTodoList = todoItems.filter((item) => item.name !== todoItemDelete);
    setTodoItems(newTodoList);
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
