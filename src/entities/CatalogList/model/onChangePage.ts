import {setCurrentPage} from "entities/Filters";
import {AppDispatch} from "app/store";

export const onChangePage = (page: number, dispatch: AppDispatch) => {
    dispatch(setCurrentPage(page));
};
