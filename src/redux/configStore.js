import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import coursesSelectReducer from './courses/coursesSelect';

const store = configureStore({
  reducer: {
    select: coursesSelectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
