import React, {FC} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "app/store/store";
import {Pagination} from "shared/ui";
import {fetchPizzas, PizzaBlock, selectPizzaData} from "entities/CatalogItem";
import {selectFilter, setCategoryId, setCurrentPage} from "shared/api";
import {PizzaBlockProps} from "entities/CatalogItem/ui/CatalogBlock";
import Skeleton from "entities/CatalogItem/ui/Skeleton";

export const CatalogList: FC = () => {
    const dispatch = useAppDispatch();

    const { items, status } = useSelector(selectPizzaData);
    const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, []);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    const getPizzas = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? String(categoryId) : '';
        const search = searchValue;

        dispatch(
            fetchPizzas({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
            }),
        );

        window.scrollTo(0, 0);
    };

    // Если изменили параметры и был первый рендер
    React.useEffect(() => {
        getPizzas();
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
