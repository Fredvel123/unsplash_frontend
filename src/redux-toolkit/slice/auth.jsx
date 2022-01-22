import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    value: false
  },
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setAuth } = auth.actions;

export default auth.reducer;
