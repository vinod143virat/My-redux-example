import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from "react-redux"
import {clear} from '../Features/User';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const onClear = () =>{
    dispatch(clear());
  }

  return (
    <>
  
      <h1> Profile Page</h1>
      <p> Email: {user.email} </p>
      <p> Password: {user.password}</p>
      <p> Age: {user.age}</p>
      <p>Phone: {user.phone}</p>
<div>
<button onClick={onClear}>Clear Values</button>
</div>
      
    
    </>
  )
}
