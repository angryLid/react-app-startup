import { configureStore } from "@reduxjs/toolkit";

import profile from "../page/DashboardPage/profileSlice";
export const store = configureStore({
  reducer: {
    profile,
  },
});
