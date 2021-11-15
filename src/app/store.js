import { configureStore } from '@reduxjs/toolkit';
import emailTemplaterReducer from '../features/emailTemplater/emailTemlaterSlice';

export const store = configureStore({
  reducer: {
    email: emailTemplaterReducer,
  },
});
