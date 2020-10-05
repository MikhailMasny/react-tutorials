import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "../../redux/actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>LogIn</button>
      <h1>Counter {counter}</h1>
      {isLogged ? <h3>Secret information</h3> : ""}
    </>
  );
}

export default App;
