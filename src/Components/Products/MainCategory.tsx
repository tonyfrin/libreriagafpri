import React from 'react';
import type { UseCategoryReturn } from 'src/states';
import { Loading } from '../Loading';
import { FadeIn, InitCategory, CategoryForm } from '../../Abstract';
import type {
  InitCategoryPropsExtended,
  CategoryFormPropsExtended,
} from '../../Abstract';

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

export const MainCategory = ({
  use,
  initProps,
  addFormProps,
  updateFromProps,
}: MainCategoryProps): JSX.Element => {
  return (
    <>
      {use.states.isFetching && <Loading />}
      {use.states.isInit && (
        <FadeIn keyName="init" isVisible={use.states.isInit}>
          <InitCategory use={use} {...initProps} />
        </FadeIn>
      )}
      {use.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.states.isAdd}>
          <CategoryForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.states.isUpdate}>
          <CategoryForm formType="update" use={use} {...updateFromProps} />
        </FadeIn>
      )}
    </>
  );
};
