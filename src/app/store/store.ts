import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {createWrapper} from "next-redux-wrapper";
import {pizzaDetail} from "entities/CatalogDetail";
import {cart} from "entities/CartItem";
import {filter} from "entities/Filters";
import {pizza} from "entities/CatalogItem";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter,
      cart,
      pizza,
      pizzaDetail
    },
  });
};

export const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
