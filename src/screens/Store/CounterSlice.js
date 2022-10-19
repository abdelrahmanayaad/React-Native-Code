import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.counter += action.payload;
    },
    decrease: (state, action) => {
      state.counter -= action.payload;
    },
  },
});
export default counterSlice.reducer;
export const {increase, decrease} = counterSlice.actions;
