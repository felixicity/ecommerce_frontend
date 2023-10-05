import { createSlice } from "@reduxjs/toolkit";
import { data, collection } from "../../data";

function getState() {
  if (localStorage.getItem("cart") == null) {
    return localStorage.getItem("cart");
  }
  return {
    cartItems: [],
    amount: 0,
    total: 0,
    isOpen: false,
    isLoading: true,
  };
}

const initialState = getState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload;
      const itemInCart = state.cartItems.filter((item) => item.id == itemId);

      if (itemInCart.length) {
        const cartItem = state.cartItems.find((item) => item.id == itemId);
        cartItem.amount = cartItem.amount + 1;
        return;
      }

      const item = collection.filter((el) => el.id === itemId);
      state.cartItems = [...state.cartItems, item[0]];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increaseQuantity: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id == itemId);
      cartItem.amount = cartItem.amount + 1;
    },

    decreaseQuantity: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.cartItems.find((item) => item.id == itemId);
      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
