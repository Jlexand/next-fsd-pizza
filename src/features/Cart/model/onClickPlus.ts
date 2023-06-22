import {addItem} from "entities/CartItem";
import {CartItem as CartItemType} from "shared/api";
import {AppDispatch} from "app/store";

export type onClickCartProps = {
    id: string,
    dispatch: AppDispatch
}
export const onClickPlus = ({id, dispatch}:onClickCartProps) => {
    dispatch(
        addItem({
            id,
        } as CartItemType),
    );
};
