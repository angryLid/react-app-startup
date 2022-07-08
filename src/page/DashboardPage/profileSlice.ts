import { createSlice } from "@reduxjs/toolkit";

interface Profile {
  name: string;
}
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    list: [{ name: "The Airport." }] as Profile[],
  },
  reducers: {
    clear: (state) => {
      state.list.length = 0;
    },
  },
});

export default profileSlice.reducer;
