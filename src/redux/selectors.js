//=============== Before ========================

// export const getTasks = state => state.tasks.items;

// export const getIsLoading = state => state.tasks.isLoading;

// export const getError = state => state.tasks.error;

// export const getStatusFitler = state => state.filters.status;

//=============== After ========================

// import { statusFilters } from './constants';

// export const selectTasks = state => state.tasks.items;

// export const selectIsLoading = state => state.tasks.isLoading;

// export const selectError = state => state.tasks.error;

// export const selectStatusFitler = state => state.filters.status;

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFitler(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const selectTaskCount = state => {
//   const tasks = selectTasks(state);

//   console.log('Calculating task count');

//   return tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );
// };

//=============== After + createSelector fixed memoization ========================

import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFitler = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFitler],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
});
