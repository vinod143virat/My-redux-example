import React, { useState } from 'react'

import { increment,decrement } from '../Features/Indc'
import {useSelector, useDispatch} from 'react-redux'

export default function Home() {
  const [count, setCount] = useState(0);
  const number = useSelector((state) => state.indc.value);
  const dispatch = useDispatch();



  const incre = () => {
    setCount(count + 1)
dispatch(increment(count));
  }

  const decre = () => {
    setCount(count - 1)
    dispatch(decrement(count));
  }

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  )
}
