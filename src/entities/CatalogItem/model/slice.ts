import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {fetchPizzas} from "./fetchPizzas";
import {Pizza, PizzaSliceState, Status} from "shared/api";

const initialState: PizzaSliceState = {
  items: [],
  activeItem: '',
  status: Status.LOADING, // loading | success | error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
    updateActiveItem(state, action) {
      state.activeItem = String(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems, updateActiveItem } = pizzaSlice.actions;

export const pizza = pizzaSlice.reducer;
