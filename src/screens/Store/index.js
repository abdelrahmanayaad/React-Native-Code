import {createStore} from 'redux';

const initState = {counter: 0, showCounter: true};

const counterReducer = (state = initState, action) => {
  if (action.type === 'increase') {
    console.log(action);
    return {...state, counter: state.counter + action.payload.increaseValue};
  }
  if (action.type === 'decrease') {
    console.log(action);
    return {...state, counter: state.counter - action.payload.decreaseValue};
  }
  if (action.type === 'showCounter') {
    console.log(action);
    return {...state, showCounter: !state.showCounter};
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
