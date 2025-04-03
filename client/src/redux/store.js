import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'; // ✅ Corrected import

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), // ✅ Ensure it returns an array
});
