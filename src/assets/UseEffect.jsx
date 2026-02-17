import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  {/* Type 1 of useEffect on the basis of execution
  useEffect(() => {
    console.log("Hello World")
  }, []) */}

  //Type 2 of useEffect on the basis of execution
  {/* useEffect(() => {
    document.title = count // dom manipulation as per below count value
    console.log("useEffect Triggered")
  }, [count, count2]) */}

  {/* Type 3 of useEffect on the basis of Execution
  // here there is no dependency array []
  useEffect(() => {
    console.log("UseEffect Triggered")
  }) - */}


  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Count : {count2}</h1>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  )
}

export default UseEffect