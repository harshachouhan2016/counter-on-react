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
      <button onClick={increment} className="border border-white text-white px-4 py-2 rounded">
        +
      </button>
      <span className="text-white px-4 py-2 rounded mx-2">
        {count}
      </span>
      <button onClick={decrement} className="border border-white text-white px-4 py-2 rounded">
        -
      </button>
      <button onClick={reset} className="bg-white text-violet-950 px-4 py-2 rounded ml-5">
        Reset
      </button>
    </div>
  );
};

export default Counter;
