import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1);
    if(count >= 10){
      setCount(10);
      alert("Counter cannot exceed 10");
    }
  }

  const decrement = () =>{
    setCount(count - 1);
    if(count <= 0){
      setCount(0);
    }
  }

  const reset = () =>{
    setCount(0);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
