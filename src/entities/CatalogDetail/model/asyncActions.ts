import {createAsyncThunk} from "@reduxjs/toolkit";
import { catalogDetail } from "shared/api";

export const fetchPizzaDetail = createAsyncThunk<object, string>(
    'pizza/fetchPizzaDetail',
    async (id) => {
        const response = await catalogDetail.getProduct({id});
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
