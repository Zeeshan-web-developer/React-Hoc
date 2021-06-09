import React from "react";
import Hoc3 from "./Hoc3";
function Increment(props) {
  return (
    <div>
      <h2>increment counter{props.count}</h2>
      <button onClick={props.increment}>Increase</button>
    </div>
  );
}

export default Hoc3(Increment, 0);
