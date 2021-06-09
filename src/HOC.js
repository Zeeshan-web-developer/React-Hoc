import React, { useState } from "react";

const HOC = (Component, data) => {
  return function NewComponent() {
    const [count, setCount] = useState(data);

    const handleCLick = () => {
      setCount(count + 1);
    };
    const handleCLick1 = () => {
      setCount(count - 1);
    };
    return (
      <Component
        CountNumber={count}
        handleCLick={handleCLick}
        handleCLick1={handleCLick1}
      />
    );
  };
};

export default HOC;
