import React from 'react';
import { useSelector } from 'react-redux';

import {CartEmpty, selectCart} from "entities/CartItem";
import {Cart} from "widgets/Cart";

const CartPage: React.FC = () => {
  const { totalPrice } = useSelector(selectCart);

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <Cart/>
  );
};

export default CartPage;
