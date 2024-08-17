import React from 'react';
import { css, cx } from '@emotion/css';
import { FadeIn, SearchProducts } from '../../Abstract';
import { Loading } from '../Loading';
import {
  UseGafpriOrderReturn,
  UseGafpriProductsReturn,
  SiteOptions,
} from '../../states';

export type ProductOrderStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

const productOrderStylesContainer = (
  stayles: ProductOrderStylesContainerProps
) => css`
  ${stayles.custom || ''}
`;

export type ProductOrderProps = {
  useProduct: UseGafpriProductsReturn;
  useOrder: UseGafpriOrderReturn;
  containerStyles?: ProductOrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
};

export const ProductOrder = ({
  useProduct,
  useOrder,
  sitesOptions,
  containerStyles = {},
  containerProps = {},
}: ProductOrderProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          productOrderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {useProduct.pages.states.isFetching && <Loading />}
        {useProduct.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={useProduct.pages.states.isInit}>
            <SearchProducts
              use={useProduct}
              sitesOptions={sitesOptions}
              useOrder={useOrder}
            />
          </FadeIn>
        )}
      </div>
    </>
  );
};
