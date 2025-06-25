import { createSlice } from "@reduxjs/toolkit";

// Define the shape of the authentication state
interface AuthState {
  isLoggedIn: boolean;
}

// Set the initial authentication state
const initialState: AuthState = {
  isLoggedIn: false,
};

// Create a Redux slice for authentication
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to log in the user
    login: (state) => {
      state.isLoggedIn = true;
    },
    // Action to log out the user
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Export the actions for use in components
export const { login, logout } = authSlice.actions;
// Export the reducer to be included in the store
export default authSlice.reducer;
