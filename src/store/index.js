import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// The returned objects here will not be merged with the existing state, they will overwrite the existing state
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // state.counter++  // We should never do this, because this will directly manipulate the state object. We need to create a new object or array whenever we need to update data
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;

