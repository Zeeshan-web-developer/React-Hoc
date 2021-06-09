import React, { useState } from "react";

function Hoc3(WrappedComponent, data) {
  return function NewComponent() {
    const [count, setCount] = useState(data);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
    return (
      <div>
        <WrappedComponent
          increment={increment}
          count={count}
          decrement={decrement}
        />
      </div>
    );
  };
}

export default Hoc3;
