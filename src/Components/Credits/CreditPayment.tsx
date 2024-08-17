import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  SiteOptions,
  UseGafpriOrderReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { Loading } from '../Loading';
import {
  PaymentMethodsImages,
  OrderView,
  CreditStep,
  CreditPaymentForm,
} from '../../Abstract';

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

export type CreditPaymentProps = {
  use: UseGafpriPaymentReturn;
  siteOptions: SiteOptions;
  useCredits: UseGafpriAccountsReceivableReturn;
  logoPdf: string;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useOrder: UseGafpriOrderReturn;
  images: PaymentMethodsImages;
};

export const CreditPayment = ({
  use,
  useOrder,
  siteOptions,
  useCredits,
  logoPdf,
  containerStyles = {},
  containerProps = {},
  images,
}: CreditPaymentProps): JSX.Element => {
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
        {useCredits.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {useCredits.pages.states.isCreditList && (
          <>
            <CreditStep
              use={use}
              useCredits={useCredits}
              siteOptions={siteOptions}
              useOrder={useOrder}
            />
          </>
        )}

        {useCredits.pages.states.isOrderView && (
          <>
            <OrderView
              sitesOptions={siteOptions}
              useOrder={useOrder}
              logoPdf={logoPdf}
              returnFunction={useCredits.pages.actions.onCreditList}
              images={images}
            />
          </>
        )}

        {useCredits.pages.states.isCreditPayment && (
          <>
            <CreditPaymentForm
              use={use}
              useCredit={useCredits}
              siteOptions={siteOptions}
            />
          </>
        )}
      </div>
    </>
  );
};
