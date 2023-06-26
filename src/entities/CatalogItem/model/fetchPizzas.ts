import {createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza, SearchPizzaParams} from "shared/api";
import {catalog} from "shared/api";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params;
        const { data } = await catalog.getCatalog(
            {
                page: currentPage,
                limit: 4,
                category,
                sortBy,
                order,
                search,
            }
        )
        return data;
    },
);
