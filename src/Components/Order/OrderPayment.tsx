import React from 'react';
import { css, cx } from '@emotion/css';
import { OrderStep, OrderPaymentForm, OrderView } from '../../Abstract';
import { Loading } from '../Loading';
import {
  UseGafpriPaymentReturn,
  SiteOptions,
  UseGafpriOrderReturn,
} from '../../states';

export type OrderStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  custom?: string;
};

const orderStylesContainer = (stayles: OrderStylesContainerProps) => css`
  padding-top: ${stayles.paddingTop || '60px'};
  padding-bottom: ${stayles.paddingBottom || '50px'};
  min-height: ${stayles.minHeight || '100vh'};
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type OrderPaymentProps = {
  use: UseGafpriPaymentReturn;
  siteOptions: SiteOptions;
  useOrder: UseGafpriOrderReturn;
  logoPdf: string;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const OrderPayment = ({
  use,
  siteOptions,
  useOrder,
  logoPdf,
  containerStyles = {},
  containerProps = {},
}: OrderPaymentProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          orderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {useOrder.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {useOrder.pages.states.isOrderList && (
          <>
            <OrderStep
              use={use}
              useOrder={useOrder}
              siteOptions={siteOptions}
            />
          </>
        )}
        {useOrder.pages.states.isOrderView && (
          <>
            <OrderView
              useOrder={useOrder}
              sitesOptions={siteOptions}
              logoPdf={logoPdf}
              returnFunction={useOrder.pages.actions.onOrderList}
            />
          </>
        )}
        {useOrder.pages.states.isOrderPayment && (
          <>
            <OrderPaymentForm
              use={use}
              useOrder={useOrder}
              siteOptions={siteOptions}
            />
          </>
        )}
      </div>
    </>
  );
};
