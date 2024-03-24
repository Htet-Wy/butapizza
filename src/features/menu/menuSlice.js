import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuItems: [],
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const url = "http://localhost:8000/pizzas";
export const getMenuItems = createAsyncThunk("menu/getMenuItems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const itemId = action.payload;
      const selectedItem = state.menuItems.find((item) => item.id === itemId);
      return {
        ...state,
        cartItems: [...state.cartItems, selectedItem],
      };
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotal: (state) => {
      let totalAmount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = totalAmount;
      state.total = total;
    },
    clearItems: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenuItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenuItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuItems = action.payload;
      })
      .addCase(getMenuItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  addtoCart,
  increase,
  decrease,
  removeItem,
  calculateTotal,
  clearItems,
} = menuSlice.actions;
export default menuSlice.reducer;
