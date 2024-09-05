import React from 'react';
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
export declare const CheckBox: React.FC<CheckboxProps>;
export {};
