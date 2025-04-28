import { createSelector, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',

  initialState: {
    name: '',
  },

  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export const filtersReducer = slice.reducer;

export const selectNameFilter = state => state.filters.name;
