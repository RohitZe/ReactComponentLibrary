import { configureStore } from '@reduxjs/toolkit';
import numbersReducer from './numberSlice';

export const store = configureStore({
  reducer: {
    numbers: numbersReducer,
  },
});