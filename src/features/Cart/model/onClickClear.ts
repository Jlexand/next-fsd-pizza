import {clearItems} from "entities/CartItem";
import {AppDispatch} from "app/store";

export const onClickClear = (dispatch: AppDispatch) => {
    if (window.confirm('Очистить корзину?')) {
        dispatch(clearItems());
    }
};
