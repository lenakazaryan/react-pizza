import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  pizzasData: [],
  filterdData: [],
  isSelectOpen: false,
  pizzaType: "all",
  sortPizza: "",
  cart: [],
  isActive: "",
};

export const counterSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    toggleSelect: (state) => {
      state.isSelectOpen = !state.isSelectOpen;
    },
    setData: (state, { payload }) => {
      state.pizzasData = payload;
    },
    setPizzaType: (state, action) => {
      state.pizzaType = action.payload;
    },
    sortPizzaPrice: (state, action) => {
      state.sortPizza = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // state.cart = state.cart.filter()
      console.log(action.payload);
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
      console.log(current(state), "action.payload");
    },
  },
});


export const {
  toggleSelect,
  setData,
  setPizzaType,
  sortPizzaPrice,
  addToCart,
  removeFromCart,
  setIsActive,
} = counterSlice.actions;

export const pizzasDataSelector = (state) => state.pizzas.pizzasData;
export const selectIsOpenSelector = (state) => state.pizzas.isSelectOpen;
export const pizzaTypeSelector = (state) => state.pizzas.pizzaType;
export const sortPizzaSelector = (state) => state.pizzas.sortPizza;
export const addToCartSelector = (state) => state.pizzas.cart;
export const menuSelector = (state) => state.pizzas.isActive;

export default counterSlice.reducer;
