import {createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza, SearchPizzaParams} from "shared/api/catalog/types";
import {getCatalog} from "shared/api/catalog/catalog";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params;
        const { data } = await getCatalog(
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
