import {minusItem} from "entities/CartItem";
import {onClickCartProps} from "features/Cart";

export const onClickMinus = ({id, dispatch}:onClickCartProps) => {
    dispatch(minusItem(id));
};
