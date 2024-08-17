import React from 'react';
import { Category } from '../../states';
import { CheckBox } from './CheckBox';

export type CategoriesCheckboxProps = {
  categoriesData: Category[];
  selectedCategoryId: number | null;
  change: (categoryId: number) => void;
};

export const CategoriesCheckBox = ({
  categoriesData,
  selectedCategoryId,
  change,
}: CategoriesCheckboxProps) => {
  return (
    <div>
      {categoriesData.map((category) => (
        <CheckBox
          key={category.id}
          category={category}
          selectedCategoryId={selectedCategoryId}
          onCategoryChange={change}
        />
      ))}
    </div>
  );
};
