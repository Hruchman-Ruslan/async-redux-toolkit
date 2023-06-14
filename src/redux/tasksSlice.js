// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const taskInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: taskInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, { payload }) {
//         state.push(payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, { payload }) {
//       const index = state.findIndex(task => task.id === payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, { payload }) {
//       for (const task of state) {
//         if (task.id === payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;

//=============== Before ========================

// import { createSlice } from '@reduxjs/toolkit';

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchInSucces(state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     fetchInError(state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchInSucces, fetchInError } =
//   tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;

//=============== After ========================

import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
