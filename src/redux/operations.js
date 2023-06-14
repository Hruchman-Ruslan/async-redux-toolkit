//=============== Before ========================

// import axios from 'axios';
// import { fetchInError, fetchInSucces, fetchingInProgress } from './tasksSlice';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const { data } = await axios.get('/tasks');

//     dispatch(fetchInSucces(data));
//   } catch (e) {
//     dispatch(fetchInError(e.message));
//   }
// };

//=============== After ========================

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = axios.get('/tasks');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
