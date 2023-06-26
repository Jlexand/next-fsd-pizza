import React, {FC} from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import {pizzaDetailSlice} from "entities/CatalogDetail";

export type pizzaProp = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number
}

export const CatalogDetail: FC = () => {
    const { pizza } = useSelector(pizzaDetailSlice);

    return (
        <div className="container">
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <Link href="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    );
};
