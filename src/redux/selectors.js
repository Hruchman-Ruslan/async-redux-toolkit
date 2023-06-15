//=============== Before ========================

// export const getTasks = state => state.tasks.items;

// export const getIsLoading = state => state.tasks.isLoading;

// export const getError = state => state.tasks.error;

// export const getStatusFitler = state => state.filters.status;

//=============== After ========================

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFitler = state => state.filters.status;
