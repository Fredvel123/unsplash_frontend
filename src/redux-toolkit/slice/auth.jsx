import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      isLogged: false,
      token: ''
    }
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
