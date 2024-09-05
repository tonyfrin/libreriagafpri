import type { UseCategoryReturn } from 'src/states';
import type { InitCategoryPropsExtended, CategoryFormPropsExtended } from '../../Abstract';
export type MainCategoryProps = {
    use: UseCategoryReturn;
    initProps?: InitCategoryPropsExtended;
    addFormProps?: CategoryFormPropsExtended;
    updateFromProps?: CategoryFormPropsExtended;
};
export type MainCategoryPropsExtended = {
    use: UseCategoryReturn;
    initProps?: InitCategoryPropsExtended;
    addFormProps?: CategoryFormPropsExtended;
    updateFromProps?: CategoryFormPropsExtended;
};
export declare const MainCategory: ({ use, initProps, addFormProps, updateFromProps, }: MainCategoryProps) => JSX.Element;
