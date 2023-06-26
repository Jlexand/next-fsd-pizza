import {AsyncThunkConfig, Pizza, SearchPizzaParams, Sort} from "shared/api";
import {AppDispatch} from "app/store";
import {AsyncThunk} from "@reduxjs/toolkit";



export const getPizzas = async (
    sort: Sort,
    categoryId: number,
    searchValue: string,
    currentPage: number,
    dispatch: AppDispatch,
    fetchPizzas:  AsyncThunk<Pizza[], SearchPizzaParams, AsyncThunkConfig>
) => {
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