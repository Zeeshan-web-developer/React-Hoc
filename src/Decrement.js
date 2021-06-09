import React from "react";
import Hoc3 from "./Hoc3";
function Decrement(props) {
  return (
    <div>
      <h2>Decrement counter{props.count}</h2>
      <button onClick={props.decrement}>Decrease</button>
    </div>
  );
}

export default Hoc3(Decrement, 0);
