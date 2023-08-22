import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state, action) => {
      state.status = !action.payload ? ['Under construction'] : [];
    },
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
