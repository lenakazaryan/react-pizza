import { combineReducers } from "@reduxjs/toolkit";
import pizzasSlice from "./slices/pizzasSlice";

export const rootReducer = combineReducers({
  pizzas: pizzasSlice,
});
