import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./userLog";

const store = configureStore({
  reducer: {
    log: logReducer,
  },
});

export default store;
