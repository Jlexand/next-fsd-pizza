import {createAsyncThunk} from "@reduxjs/toolkit";
import {Pizza, SearchPizzaParams} from "app/redux/pizza/types";
import axios from "axios";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params;
        const {data} = await axios.get<Pizza[]>(`https://648f77e375a96b66444529a0.mockapi.io/pizzas`, {
            params: pickBy(
                {
                    page: currentPage,
                    limit: 4,
                    category,
                    sortBy,
                    order,
                    search,
                },
                identity,
            ),
        });

        return data;
    },
);
