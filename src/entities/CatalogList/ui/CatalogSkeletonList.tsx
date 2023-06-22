import React, {FC} from "react";
import {Skeleton} from "entities/CatalogItem";

export const CatalogSkeletonList: FC = () => {
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            {skeletons}
        </>
    );
};
