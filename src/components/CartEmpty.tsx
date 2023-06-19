import React from 'react';

import cartEmptyImg from 'public/img/empty-cart.png';
import Link from "next/link";
import Image from "next/image";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <Image src={cartEmptyImg} alt="Empty cart" />
    <Link href="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
