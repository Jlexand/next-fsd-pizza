import { configureStore } from '@reduxjs/toolkit';
import filter from 'entities/Filters/model/slice';
import cart from 'entities/CartItem/model/slice';
import pizza from 'entities/CatalogItem/model/slice';
import { useDispatch } from 'react-redux';

export const makeStore = () => {
  return configureStore({
    reducer: {
      filter,
      cart,
      pizza,
    },
  });
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
