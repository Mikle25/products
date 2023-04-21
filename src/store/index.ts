import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { supabaseApi } from "./supabase/supabase.api";
import {binanceApi} from "./binance/binance.api";

const rootReducer = combineReducers({
  [supabaseApi.reducerPath]: supabaseApi.reducer,
  [binanceApi.reducerPath]: binanceApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(supabaseApi.middleware).concat(binanceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
