import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";
// import your other slices here (like pagination/movies if you have them)

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    // your other reducers...
  }
});