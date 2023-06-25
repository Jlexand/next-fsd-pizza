import { createSlice } from '@reduxjs/toolkit';
import {fetchPizzaDetail} from "./asyncActions";
import {pizzaProp} from "entities/CatalogDetail";

type pizzaState = {
  pizza: pizzaProp | []
}

const initialState: pizzaState = {
  pizza: [],
};

const pizzaDetailSlice = createSlice({
  name: 'pizzaDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzaDetail.pending, (state, action) => {
      state.pizza = [];
    });

    builder.addCase(fetchPizzaDetail.fulfilled, (state, action) => {
      state.pizza = action.payload.pizza;
    });

    builder.addCase(fetchPizzaDetail.rejected, (state, action) => {
      state.pizza = [];
    });
  },
});

export const pizzaDetail = pizzaDetailSlice.reducer;
