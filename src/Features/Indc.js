import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = 0;

export const indcSlice = createSlice({
    name: "indc",
    initialState: { value: initialStateValue },
    reducers: {
      increment: (state, action) => {
        state.value = action.payload;
      },
  
      decrement: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  

  export const { increment, decrement } = indcSlice.actions;

export default indcSlice.reducer;