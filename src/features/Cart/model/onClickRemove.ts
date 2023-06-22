import {removeItem} from "entities/CartItem";
import {onClickCartProps} from "features/Cart";

export const onClickRemove = ({id, dispatch}:onClickCartProps) => {
    if (window.confirm('Ты действительно хочешь удалить товар?')) {
        dispatch(removeItem(id));
    }
};
