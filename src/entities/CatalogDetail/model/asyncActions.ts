import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPizzaDetail = createAsyncThunk(
    'pizza/fetchPizzaDetail',
    async (id: string) => {
        const response = await fetch('https://648f77e375a96b66444529a0.mockapi.io/pizzas?id=' + id);
        let data =  await response.json();

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
