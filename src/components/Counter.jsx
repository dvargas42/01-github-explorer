import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{ count }</h2>
      <button type="button" onClick={ increment }>
        Increment
      </button>
    </div>
  )
}

export { Counter }