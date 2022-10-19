import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import AuthReducer from './AuthSlice';
import AuthTwoReducer from './AuthSliceTwo';
// const initialState = {counter: 0};

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialState,
//   reducers: {
//     increase: (state, action) => {
//       state.counter += action.payload;
//     },
//     decrease: (state, action) => {
//       state.counter -= action.payload;
//     },
//   },
// });

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: AuthReducer,
    authTwo: AuthTwoReducer,
  },
});
export default store;

/**
 *@React - Redux
const initState = {counter: 0, showCounter: true};
const counterReducer = (state = initState, action) => {
  if (action.type === 'increase') {
    return {...state, counter: state.counter + action.payload.increaseValue};
  }
  if (action.type === 'decrease') {
    return {...state, counter: state.counter - action.payload.decreaseValue};
  }
  if (action.type === 'showCounter') {
    return {...state, showCounter: !state.showCounter};
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
 */
