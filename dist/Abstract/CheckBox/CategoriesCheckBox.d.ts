import React from 'react';
import { Category } from '../../states';
export type CategoriesCheckboxProps = {
    categoriesData: Category[];
    selectedCategoryId: number | null;
    change: (categoryId: number) => void;
};
export declare const CategoriesCheckBox: ({ categoriesData, selectedCategoryId, change, }: CategoriesCheckboxProps) => React.JSX.Element;
