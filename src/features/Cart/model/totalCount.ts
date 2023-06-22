import {CartItem} from "shared/api";

export const totalCountCount = (items: CartItem[]) => {
    return items.reduce((sum: number, item: CartItem) => sum + item.count, 0)
};
