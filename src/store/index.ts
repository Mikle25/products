import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { supabaseApi } from "./supabase/supabase.api";

const rootReducer = combineReducers({
  [supabaseApi.reducerPath]: supabaseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
