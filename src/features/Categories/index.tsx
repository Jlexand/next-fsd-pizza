import React from 'react';
import './styles.scss'
import {setCategoryId} from "entities/Filters";
import {useAppDispatch} from "app/store";

type CategoriesProps = {
  value: number;
  categoryList: string[]
};

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, categoryList }) => {
    const dispatch = useAppDispatch();

    const onChangeCategory = React.useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, []);

    return (
    <div className="categories">
      <ul>
        {categoryList.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.displayName = 'Categories';

