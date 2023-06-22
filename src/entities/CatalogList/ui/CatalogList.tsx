import React, {FC} from "react";
import {useSelector} from "react-redux";
import {Pagination} from "shared/ui";
import {PizzaBlock, PizzaBlockProps, selectPizzaData, Skeleton} from "entities/CatalogItem";
import {useAppDispatch} from "app/store";
import {selectFilter, setCategoryId, setCurrentPage} from "entities/Filters";
import {getPizzas} from "../model/GetItems";

export const CatalogList: FC = () => {
    const dispatch = useAppDispatch();

    const { items, status } = useSelector(selectPizzaData);
    const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    React.useEffect(() => {
        getPizzas(sort, categoryId, searchValue, currentPage, dispatch);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);


    const pizzas = items.map((obj: PizzaBlockProps) => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
            )}

            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    );
};
