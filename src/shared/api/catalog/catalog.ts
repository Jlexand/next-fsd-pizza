import {apiInstance, Pizza} from "shared/api";
import {AxiosPromise} from "axios";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const getCatalog = (params: { search: string; limit: number; sortBy: string; page: string; category: string; order: string }): AxiosPromise<Pizza[]> => {
    return apiInstance.get('pizzas', {
        params: pickBy(params, identity)
    })
};
