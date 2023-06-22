import { calcTotalPrice } from './calcTotalPrice';
import {CartItem} from "../api";

export const getCartFromLS = () => {
  // const data = localStorage.getItem('cart');
  const data = undefined; // временное решение пока не разбирусь с localStorage
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
