import {AxiosPromise} from "axios";
import {apiInstance, Pizza} from "shared/api";

export const getProduct = (params: { id: string }): AxiosPromise<Pizza> => {
    return apiInstance.get('pizzas', {
        params: params
    })
};