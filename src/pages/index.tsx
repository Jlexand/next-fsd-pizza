import type { NextPage } from 'next'
import React from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "app/store/store";
import {selectFilter} from "shared/api/filters/selectors";
import {selectPizzaData} from "entities/CatalogItem/model/selectors";
import {setCategoryId, setCurrentPage} from "shared/api/filters/slice";
import {fetchPizzas} from "entities/CatalogItem/model/fetchPizzas";
import {Pagination} from "shared/ui";
import {Sort} from "features/Sort";
import {Categories} from "features/Categories";
import {PizzaBlock, Skeleton} from "entities/CatalogItem";

const Home: NextPage = () => {
    const dispatch = useAppDispatch();
    const isMounted = React.useRef(false);

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
        // isMounted.current = true;
    }, [categoryId, sort.sortProperty, searchValue, currentPage]);


    const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                <Sort value={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
            )}

            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    );
};

export default Home;
