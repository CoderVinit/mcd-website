import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./services/baseApi";
import fanEngagementSlice from "./slices/fanEngagementSlice";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    fanEngagement: fanEngagementSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
