const redux = require("redux"); // Here we import Redux

const counterReducer = (state = { counter: 0 }, action) => {
  // counterReducer is a function
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  //   return state;
};

const store = redux.createStore(counterReducer); // This is the store where the actual data is stored
console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
