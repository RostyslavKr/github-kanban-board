import { createSlice } from '@reduxjs/toolkit';

const querySlise = createSlice({
  name: 'query',
  initialState: { queryIssues: '' },
  reducers: {
    queryIssues(state, action) {
      state.queryIssues = action.payload;
    },
  },
});

export const { queryIssues } = querySlise.actions;
export const queryReducer = querySlise.reducer;
