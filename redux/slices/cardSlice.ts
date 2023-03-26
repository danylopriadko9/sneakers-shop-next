import { Product } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CardState {
  items: Product[];
}

const initialState: CardState = {
  items: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItemToCard: (state, action) => {
      if (state.items.indexOf(action.payload)) {
        // если такой продукт уже добавлен в корзину
      }
    },
  },
});

export const { addItemToCard } = cardSlice.actions;
export const selectCartItems = (state: RootState) => state.card.items;
export default cardSlice.reducer;
