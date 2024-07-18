import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(8);

  useEffect(() => {
    alert("Counter increased by 1");
  }, [count]);

  const handelIncrement = () => {
    setCount(count + 1);
  };

  const Increment = () => {
    setCountTwo(countTwo + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handelIncrement}>Increment</button>
      <h1>Count Two: {countTwo}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  );
};

export default UseEffect;