const redux = require("redux");

const IN_VALUE = {
  counter: 12,
};

const storeReducer = (store = IN_VALUE, action) => {
  let newStore = store;
  if (action.type === "ADD") {
    console.log("Action Called");
  }
  return newStore;
};

const store = redux.createStore(storeReducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

store.dispatch({ type: "ADD" });
