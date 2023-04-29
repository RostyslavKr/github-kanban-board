import { configureStore } from '@reduxjs/toolkit';
import { queryReducer } from './querySlice';
import { issuesReducer } from './issuesSlice';

export const store = configureStore({
  reducer: {
    issue: issuesReducer,
    query: queryReducer,
  },
});
