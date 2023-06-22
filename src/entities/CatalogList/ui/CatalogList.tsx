import React, {FC} from "react";
import {useSelector} from "react-redux";
import {PizzaBlock, PizzaBlockProps, selectPizzaData, Skeleton} from "entities/CatalogItem";

export const CatalogList: FC = () => {
    const { items } = useSelector(selectPizzaData);

    const pizzas = items.map((obj: PizzaBlockProps) => <PizzaBlock key={obj.id} {...obj} />);

    return (
        <>
            {pizzas}
        </>
    );
};
