import type { NextPage } from 'next'
import React from "react";
import {useSelector} from "react-redux";
import {Sort} from "features/Sort";
import {Categories} from "features/Categories";
import {categoryList} from "entities/Categories";
import {CatalogList} from "widgets/catalog";
import {selectFilter} from "shared/api";

const Home: NextPage = () => {
    const { categoryId, sort } = useSelector(selectFilter);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} categoryList={categoryList} />
                <Sort value={sort} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <CatalogList/>
        </div>
    );
};

export default Home;
