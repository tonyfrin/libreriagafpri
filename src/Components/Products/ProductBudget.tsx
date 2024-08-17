import React from 'react';
import { css, cx } from '@emotion/css';
import { FadeIn, SearchProductsBudget } from '../../Abstract';
import { Loading } from '../Loading';
import {
  UseGafpriBudgetReturn,
  UseGafpriProductsReturn,
  SiteOptions,
} from '../../states';

export type ProductBudgetStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const productBudgetStylesContainer = (
  stayles: ProductBudgetStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type ProductBudgetProps = {
  useProduct: UseGafpriProductsReturn;
  useBudget: UseGafpriBudgetReturn;
  containerStyles?: ProductBudgetStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
};

export const ProductBudget = ({
  useProduct,
  useBudget,
  sitesOptions,
  containerStyles = {},
  containerProps = {},
}: ProductBudgetProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          productBudgetStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {useProduct.pages.states.isFetching && <Loading />}
        {useProduct.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={useProduct.pages.states.isInit}>
            <SearchProductsBudget
              use={useProduct}
              sitesOptions={sitesOptions}
              useBudget={useBudget}
            />
          </FadeIn>
        )}
      </div>
    </>
  );
};
