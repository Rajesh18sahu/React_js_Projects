import { useState } from "react";
import "./App.css";
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItemsContext } from "./store/todoItems-store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Diary",
      dueDate: "31-12-2024",
    },
    {
      name: "Buy Pen",
      dueDate: "31-12-2024",
    },
    {
      name: "Buy Beer",
      dueDate: "31-12-2024",
    },
  ]);

  function handleNewItem(name, dueDate) {
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

  function handleDeleteButton(todoItemDelete) {
    console.log(` ${todoItemDelete} delete button clicked `);
    let newTodoList = todoItems.filter((item) => item.name !== todoItemDelete);
    setTodoItems(newTodoList);
  }

  return (
    <center>
      <TodoItemsContext.Provider value={todoItems}>
        <TodoHeading />
        <div className="todoItemContainer">
          <TodoInput handleNewItem={handleNewItem} />
          <TodoItems handleDeleteButton={handleDeleteButton} />
        </div>
      </TodoItemsContext.Provider>
    </center>
  );
}

export default App;
