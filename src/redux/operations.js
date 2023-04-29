import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.github.com/';

export const fetchIssues = createAsyncThunk(
  'issues/fetchAll',
  async (name, thunkApi) => {
    try {
      const response = await axios.get(`/repos/${name}/issues`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
