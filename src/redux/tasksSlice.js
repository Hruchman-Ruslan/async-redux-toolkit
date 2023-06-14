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

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addTasks,
//   deleteTasks,
//   fetchTasks,
//   toggleCompleted,
// } from './operations';

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchTasks.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     [fetchTasks.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [addTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [addTasks.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },
//     [addTasks.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [deleteTasks.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteTasks.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload.id);
//       state.items.splice(index, 1);
//     },
//     [deleteTasks.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [toggleCompleted.pending](state) {
//       state.isLoading = true;
//     },
//     [toggleCompleted.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload.id);
//       state.items.splice(index, 1);
//     },
//     [toggleCompleted.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const tasksReducer = tasksSlice.reducer;

//=============== After + refactoring ========================

import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const tasksSice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //=============== pending ========================
    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    //=============== rejected ========================
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    //=============== fulfilled ========================
    [fetchTasks.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1);
    },
    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1, payload);
    },
  },
});

export const tasksReducer = tasksSice.reducer;
