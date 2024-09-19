import React, { useCallback, useMemo, useState } from 'react'

const App = () => {

  const[count, setCount] = useState(0)
  const[value, setvalue] = useState()

  const btnClickHandler = useCallback(() => {
    setCount(count + 1)
  }, [])


  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  

   function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }

   let ans = useMemo(() => {
    return findNthPrime(value)
   }, [value])

  return (
    <div>

    <div>
      <input value={value} onChange={(e) => {
        setvalue(e.target.value)
      }} type='number' placeholder='Enter your number' />
      <h3>{value}th prime is {ans}</h3>
    </div>

      <div>
          <button onClick={btnClickHandler}>Increment</button>
          <h1>{count}</h1>
      </div>
    </div>
  )
}

export default App