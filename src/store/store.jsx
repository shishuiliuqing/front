import { configureStore } from '@reduxjs/toolkit';
import backendReducer from './modules/backend';

export default configureStore({
  reducer: {
    backend: backendReducer
  },
});