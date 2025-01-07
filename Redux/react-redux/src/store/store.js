import { createStore } from "redux";

const DEFAULT_VALUE = {
  counter: 10,
};

const storeReducer = (store = DEFAULT_VALUE, action) => {
  if (action.type === "ADD") {
    return { counter: store.counter + 1 };
  } else if (action.type === "SUBTRACT") {
    return { counter: store.counter - 1 };
  }

  return store;
};

const store = createStore(storeReducer);

export default store;
