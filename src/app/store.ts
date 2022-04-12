import { configureStore } from "@reduxjs/toolkit";
import channelSlice from "../feature/channelSlice";

export const store = configureStore({
  reducer: {
    channel: channelSlice,
  },
});
