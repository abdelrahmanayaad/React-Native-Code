import {createSlice} from '@reduxjs/toolkit';

const initialState = {showCounter: true};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showCounter: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export default AuthSlice.reducer;
export const {showCounter} = AuthSlice.actions;
