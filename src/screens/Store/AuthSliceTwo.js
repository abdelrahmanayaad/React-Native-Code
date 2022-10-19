import {createSlice} from '@reduxjs/toolkit';

const initialState = {showCounter: false};

const AuthTwoSlice = createSlice({
  name: 'auth two',
  initialState,
  reducers: {
    login: state => {
      state.showCounter = true;
    },
    logout: state => {
      state.showCounter = false;
    },
  },
});

export default AuthTwoSlice.reducer;
export const {login, logout} = AuthTwoSlice.actions;
