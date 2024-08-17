import React from 'react';
import { Loading } from '../Loading';
import { FadeIn, InitProducts, ProductsForm } from '../../Abstract';
import type { UseGafpriProductsReturn, SiteOptions } from '../../states';

export type ProductsProps = {
  use: UseGafpriProductsReturn;
  sitesOptions: SiteOptions;
};

export const Products = ({ use, sitesOptions }: ProductsProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitProducts use={use} sitesOptions={sitesOptions} />
        </FadeIn>
      )}

      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ProductsForm use={use} formType="add" />
        </FadeIn>
      )}

      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ProductsForm use={use} formType="update" />
        </FadeIn>
      )}
    </>
  );
};
