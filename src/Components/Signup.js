import React from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../Features/User';

export default function Signup() {

    const initialValaues = {
        email: "",
        password: "",
        age: 0,
        phone: ""
    
    }

    const dispatch = useDispatch();

const [values, setValues] = React.useState(initialValaues)

const onchg = (e) => {
  
    setValues({
        ...values,                                // spreading the unchanged values
        [e.target.name]: e.target.value,
})

}

const onSmt = () => {

  dispatch(login(values));

}

const onSub = (e) => {

    e.preventDefault();
}


  return (
    <>
       <form onSubmit={onSub}>
      <input name='email' type="text" onChange={onchg} />
      <input name='password' type="text" onChange={onchg}/>
      <input name='age' type="number" onChange={onchg}/>
      <input name='phone' type="text" onChange={onchg} />
      <button onClick={onSmt}>Signup</button>
      </form>

      <h3>{JSON.stringify(values)}</h3>
    </>
    
  )
}
