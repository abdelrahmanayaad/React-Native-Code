import {createSlice, createStore} from '@reduxjs/toolkit';

const initialState = {counter: 0};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.counter += 1;
    },
    decrease: (state, action) => {
      state.counter -= 1;
    },
  },
});

const store = createStore(counterSlice.reducer);
export const {increase, decrease} = counterSlice.actions;
export default store;

/*import { createStore } from 'redux';

const initState = {counter: 0};
const counterReducer = (state = initState, action) => {
  if (action.type === 'increase') {
    return {...state, counter: state.counter + 1};
  }
  if (action.type === 'decrease') {
    return {...state, counter: state.counter - 1};
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
*/
