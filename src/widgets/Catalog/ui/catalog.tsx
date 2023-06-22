import React, {FC} from "react";
import {useSelector} from "react-redux";
import {selectPizzaData} from "entities/CatalogItem";
import {useAppDispatch} from "app/store";
import {selectFilter} from "entities/Filters";
import {Pagination} from "features/Pagination";
import {CatalogList, CatalogSkeletonList, getPizzas} from "entities/CatalogList";

export const Catalog: FC = () => {
    const dispatch = useAppDispatch();

    const {status } = useSelector(selectPizzaData);
    const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

    React.useEffect(() => {
        getPizzas(sort, categoryId, searchValue, currentPage, dispatch);
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);

    return (
        <>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? <CatalogSkeletonList/> : <CatalogList/>}</div>
            )}

            <Pagination currentPage={currentPage} />
        </>
    );
};
