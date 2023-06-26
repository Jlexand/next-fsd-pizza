import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProduct} from "shared/api/catalog/catalogDetail";

export const fetchPizzaDetail = createAsyncThunk<object, string>(
    'pizza/fetchPizzaDetail',
    async (id) => {
        const response = await getProduct({id});
        let data =  await response.data;

        if (!data || !data.length) {
            return {
                notFound: true,
            }
        }

        return {
            pizza: {...data[0]}
        }
    }
)
