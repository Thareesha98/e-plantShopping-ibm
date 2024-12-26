import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const item=action.payload;
      const existingItem=state.items.find((i) => i.name===item.name);
      if(existingItem){
        existingItem.quantity++;
      }else{
        state.items.push({...item,quantity:1});
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((x) => x.name === item.name);
      if(existingItem){
        state.items = state.items.filter((x) => x.name != item.name)
      }
    },
    updateQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((x) => x.name === item.name);
      existingItem.quantity = item.quantity;
      //Problem heeree
      if(existingItem.quantity ===0){
        state.items = state.items.filter((x) => x.name !== item.name)
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
