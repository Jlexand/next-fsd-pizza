import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPizzaData} from "entities/CatalogItem";
import {CatalogDetail, fetchPizzaDetail} from "entities/CatalogDetail";


export const CatalogDetailBlock: FC = () => {
    const dispatch = useDispatch();
    const {activeItem} = useSelector(selectPizzaData);
    dispatch(fetchPizzaDetail(activeItem));

    return (
        <CatalogDetail />
    );
};
