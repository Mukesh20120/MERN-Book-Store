import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to cart!",
            showConfirmButton: false,
            timer: 1500
          });
      }else{
        Swal.fire({
            title: "Are you sure?",
            text: "Item already exists in the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
          })
      }
    },
    clearCart: (state) => {
        state.cartItems = [];
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item)=> item._id !== action.payload._id);
    }
  },
});


export const {addToCart, clearCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;