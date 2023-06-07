import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzasData: [],
  filterdData: [],
  isSelectOpen: false,
  pizzaType: "all",
  sortPizza: "",
  cart: [],
  // card2: {
  //   7: [
  //     {
  //       type: 1,
  //       size: 2,
  //       price: 270,
  //     },
  //     {
  //       type: 1,
  //       size: 3,
  //       price: 310,
  //     },
  //   ],
  //   8: [
  //     {
  //       type: 1,
  //       size: 2,
  //       price: 370,
  //     },
  //   ],
  // },
  PizzasActiveId: "",
  sauces: [],
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
    setPizzaType: (state, { payload }) => {
      state.pizzaType = payload;
    },
    sortPizzaPrice: (state, { payload }) => {
      state.sortPizza = payload;
    },
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    addToCart2: (state, { payload }) => {
      state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      // state.cart = state.cart.filter()
      console.log(payload);
    },
    setIsActive: (state, { payload }) => {
      state.PizzasActiveId = payload;
    },
    setSauces: (state, { payload }) => {
      state.sauces = payload;
    },
  },
});

export const {
  toggleSelect,
  setData,
  setPizzaType,
  sortPizzaPrice,
  addToCart,
  addToCart2,
  removeFromCart,
  setIsActive,
  setSauces,
} = counterSlice.actions;

export const pizzasDataSelector = (state) => state.pizzas.pizzasData;
export const selectIsOpenSelector = (state) => state.pizzas.isSelectOpen;
export const pizzaTypeSelector = (state) => state.pizzas.pizzaType;
export const sortPizzaSelector = (state) => state.pizzas.sortPizza;
export const addToCartSelector = (state) => state.pizzas.cart;
export const addToCartSelector2 = (state) => state.pizzas.cart2;
export const pizzasActiveIdSelector = (state) => state.pizzas.PizzasActiveId;
export const saucesSelector = (state) => state.pizzas.sauces;

export default counterSlice.reducer;
