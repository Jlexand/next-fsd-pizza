import React from 'react';
import Link from "next/link";
import {GetServerSideProps} from "next";
import { ParsedUrlQuery } from "querystring";

type pizzaProp = {
    id: number,
    imageUrl: string,
    title: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number
}

type pizzaPropInfo = {
    pizza: pizzaProp
}

interface Params extends ParsedUrlQuery {
    slug: string;
}

export const getServerSideProps: GetServerSideProps= async (context) => {
  const { id } = context.params as Params;

    const response = await fetch('https://648f77e375a96b66444529a0.mockapi.io/pizzas?id=' + id);
    let data =  await response.json();

    if (!data || !data.length) {
        return {
            notFound: true,
        }
    }

    return {
      props: {
          pizza: data[0]
      }
    }
}
const Id: React.FC<pizzaPropInfo> = ({pizza}) => {

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

export default Id;
