//=============== Before = "IMMER the best" ========================

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

//=============== After = "IMMER the best" ========================

// import { createSlice } from '@reduxjs/toolkit';
// import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';

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
//     [addTask.pending](state) {
//       state.isLoading = true;
//     },
//     [addTask.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },
//     [addTask.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//     [deleteTask.pending](state) {
//       state.isLoading = true;
//     },
//     [deleteTask.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload.id);
//       state.items.splice(index, 1);
//     },
//     [deleteTask.rejected](state, { payload }) {
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
//       state.items.splice(index, 1, payload);
//     },
//     [toggleCompleted.rejected](state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const tasksReducer = tasksSlice.reducer;

//=============== After + refactoring = "IMMER the best" ========================

// import { createSlice } from '@reduxjs/toolkit';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const tasksSice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     //=============== pending ========================
//     [fetchTasks.pending]: handlePending,
//     [addTask.pending]: handlePending,
//     [deleteTask.pending]: handlePending,
//     [toggleCompleted.pending]: handlePending,
//     //=============== rejected ========================
//     [fetchTasks.rejected]: handleRejected,
//     [addTask.rejected]: handleRejected,
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.rejected]: handleRejected,
//     //=============== fulfilled ========================
//     [fetchTasks.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     [addTask.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },
//     [deleteTask.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload.id);
//       state.items.splice(index, 1);
//     },
//     [toggleCompleted.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload.id);
//       state.items.splice(index, 1, payload);
//     },
//   },
// });

// export const tasksReducer = tasksSice.reducer;

//=============== After + refactoring = "IMMER the best" + Rewrote on the builder "functional form" ========================

// import { createSlice } from '@reduxjs/toolkit';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const tasksSice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(fetchTasks.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(addTask.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(deleteTask.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(toggleCompleted.pending, state => {
//         state.isLoading = true;
//       })
//       .addCase(fetchTasks.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(addTask.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(deleteTask.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(toggleCompleted.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = payload;
//       })
//       .addCase(fetchTasks.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = payload;
//       })
//       .addCase(addTask.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(payload);
//       })
//       .addCase(deleteTask.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1);
//       })
//       .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1, payload);
//       }),
// });

// export const tasksReducer = tasksSice.reducer;

//=============== After + refactoring = "IMMER the best" + Rewrote on the builder "functional form" + code refactoring ========================

// import { createSlice } from '@reduxjs/toolkit';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const tasksSice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       //=============== pending ========================
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(addTask.pending, handlePending)
//       .addCase(deleteTask.pending, handlePending)
//       .addCase(toggleCompleted.pending, handlePending)
//       //=============== rejected ========================
//       .addCase(fetchTasks.rejected, handleRejected)
//       .addCase(addTask.rejected, handleRejected)
//       .addCase(deleteTask.rejected, handleRejected)
//       .addCase(toggleCompleted.rejected, handleRejected)
//       //=============== fulfilled ========================
//       .addCase(fetchTasks.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = payload;
//       })
//       .addCase(addTask.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(payload);
//       })
//       .addCase(deleteTask.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1);
//       })
//       .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1, payload);
//       }),
// });

// export const tasksReducer = tasksSice.reducer;

//=============== After + refactoring = "IMMER the best" + Rewrote on the builder "functional form" + addMatcher (first addCase then addMatcher) ========================

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const tasksSice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      //=============== fulfilled ========================
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(task => task.id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(task => task.id === payload.id);
        state.items.splice(index, 1, payload);
      })
      .addMatcher(
        isAnyOf(
          fetchTasks.fulfilled,
          addTask.fulfilled,
          deleteTask.fulfilled,
          toggleCompleted.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      //=============== pending ========================
      .addMatcher(
        isAnyOf(
          fetchTasks.pending,
          addTask.pending,
          deleteTask.pending,
          toggleCompleted.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      //=============== rejected ========================
      .addMatcher(
        isAnyOf(
          fetchTasks.rejected,
          addTask.rejected,
          deleteTask.rejected,
          toggleCompleted.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const tasksReducer = tasksSice.reducer;

//=============== After javascript 😈 ninja style ========================

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

// const ninjaActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

// const tasksSice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       //=============== fulfilled ========================
//       .addCase(fetchTasks.fulfilled, (state, { payload }) => {
//         state.items = payload;
//       })
//       .addCase(addTask.fulfilled, (state, { payload }) => {
//         state.items.push(payload);
//       })
//       .addCase(deleteTask.fulfilled, (state, { payload }) => {
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1);
//       })
//       .addCase(toggleCompleted.fulfilled, (state, { payload }) => {
//         const index = state.items.findIndex(task => task.id === payload.id);
//         state.items.splice(index, 1, payload);
//       })
//       .addMatcher(
//         isAnyOf(...ninjaActions.map(action => action.fulfilled)),
//         state => {
//           state.isLoading = false;
//           state.error = null;
//         }
//       )
//       //=============== pending ========================
//       .addMatcher(
//         isAnyOf(...ninjaActions.map(action => action.pending)),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       //=============== rejected ========================
//       .addMatcher(
//         isAnyOf(...ninjaActions.map(action => action.rejected)),
//         (state, { payload }) => {
//           state.isLoading = false;
//           state.error = payload;
//         }
//       ),
// });

// export const tasksReducer = tasksSice.reducer;
