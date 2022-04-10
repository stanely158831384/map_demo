import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const plusTen = () =>{
    dispatch({ type: "plusTen", value: 10 });
  }

  const toggleCounterHandler = () => {};

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={plusTen}>plus 10</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  );
};
export default Counter;
