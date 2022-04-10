import { createStore } from "redux";
const counterReducer = (state = { td: [] }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if(action.type === "addData"){
    return { td: [...state.td, action.value]}
  }
  if(action.type === "removeLastData"){
      return {td: [...(state.td.pop())]}
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
