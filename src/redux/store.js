import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slice';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
