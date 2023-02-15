import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzasData: [],
  filterdData: [],
  isSelectOpen: false,
  pizzaType: "all",
  sortPizza: "",
};

export const counterSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    toggleSelect: (state) => {
      state.isSelectOpen = !state.isSelectOpen;
    },
    setData: (state, action) => {
      state.pizzasData = action.payload;
    },
    setPizzaType: (state, action) => {
      state.pizzaType = action.payload;
    },
    sortPizzaPrice: (state, action) => {
      state.sortPizza = action.payload;
    },
  },
});

export const {
  toggleSelect,
  setData,
  setPizzaType,
  sortPizzaPrice,
} = counterSlice.actions;

export const pizzasDataSelector = (state) => state.pizzas.pizzasData;

export const selectIsOpenSelector = (state) => state.pizzas.isSelectOpen;

export const pizzaTypeSelector = (state) => state.pizzas.pizzaType;

export const sortPizzaSelector = (state) => state.pizzas.sortPizza;

export default counterSlice.reducer;
