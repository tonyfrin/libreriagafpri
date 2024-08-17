import React from 'react';
import { css, cx } from '@emotion/css';

type DivStyle = {
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  color?: string;
  customStyle?: string;
};

type LabelStyle = {
  marginTop?: string;
  marginBottom?: string;
  customStyle?: string;
};

const divStyle = (styles: DivStyle) => css`
  margin-top: ${styles.marginTop || '10px'};
  margin-left: ${styles.marginLeft || '20px'};
  margin-bottom: ${styles.marginBottom || '10px'};
  color: ${styles.color || '#8D8D8D'};
  ${styles.customStyle || ''}
`;

const labelStyle = (styles: LabelStyle) => css`
  margin-top: ${styles.marginTop || '5px'};
  margin-bottom: ${styles.marginBottom || '5px'};
  ${styles.customStyle || ''}
`;

interface Category {
  id: number;
  name: string;
  children?: Category[];
}

export interface CheckboxProps {
  category: Category;
  selectedCategoryId: number | null;
  onCategoryChange: (categoryId: number) => void;
  containerStyles?: DivStyle;
  itemStayles?: LabelStyle;
}

export const CheckBox: React.FC<CheckboxProps> = ({
  category,
  selectedCategoryId,
  onCategoryChange,
  containerStyles = {},
  itemStayles = {},
}) => {
  const isChecked = `${selectedCategoryId}` === `${category.id}`;

  const handleCheckboxChange = () => {
    onCategoryChange(category.id);
  };

  return (
    <div className={cx(divStyle(containerStyles))}>
      <label className={cx(labelStyle(itemStayles))}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {category.name}
      </label>

      {category.children && (
        <div className={cx(divStyle(containerStyles))}>
          {category.children.map((child) => (
            <CheckBox
              key={child.id}
              category={child}
              selectedCategoryId={selectedCategoryId}
              onCategoryChange={onCategoryChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};
