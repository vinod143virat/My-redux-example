import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {email: "", password: "", age: 0, phone: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
      login: (state, action) => {
        state.value = action.payload;
      },
  
      clear: (state) => {
        state.value = initialStateValue;
      },
    },
  });
  

  export const { login, clear } = userSlice.actions;

export default userSlice.reducer;