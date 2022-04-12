import { createStore } from "redux";
const counterReducer = (state = { td: [] }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if(action.type === "addData"){
    return { td: [action.value,...state.td,]}
  }
  if(action.type === "customData"){
      return {td: [...action.value]}
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
