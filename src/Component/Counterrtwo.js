import React, { useState } from 'react'

function CounterTwo() {
    const intialCount = 0
    const [count,setCount] = useState(intialCount)

    const incrementFive =( ) => {
        for (let i=0;i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }

     return ( 
     <div>
         Count :{count}
      <button onClick={() => setCount(intialCount)}>Count {count}</button>
      <button onClick={() => setCount(prevCount => prevCount+1)}>Coun+1 </button>
      <button onClick={() => setCount(prevCount => prevCount-1)}>Count -1 </button>
      <button onClick={incrementFive}>5</button>
     </div>
  )
}

export default CounterTwo