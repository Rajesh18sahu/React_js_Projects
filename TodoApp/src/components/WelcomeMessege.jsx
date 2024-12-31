import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItems-store";

const WelcomeMessege = () => {
  const todoItems = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p> Enjoy your Day</p>;
};

export default WelcomeMessege;
