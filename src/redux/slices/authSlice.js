import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'userAuth',
  initialState: {
    name: null,
    isLoggedIn: false,
  },
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setSignOut: state => {
      state.isLoggedIn = false;
      state.name = null;
    },
    setUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {setSignIn, setSignOut, setUser} = authSlice.actions;
export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectUser = state => state.userAuth.name;

export default authSlice.reducer;
