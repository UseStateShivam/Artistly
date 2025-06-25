import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";

/**
 * Configures and exports the Redux store for the application.
 * Currently includes the authentication reducer.
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
