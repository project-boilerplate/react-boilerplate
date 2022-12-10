import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { homeApi } from "pages/Home/Home.api";

import homeReducer from "pages/Home/Home.slice";

const rootReducer = combineReducers({
  home: homeReducer,
  [homeApi.reducerPath]: homeApi.reducer,
});

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(homeApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = typeof createStore;
