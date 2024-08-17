import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  SiteOptions,
  UseGafpriOrderReturn,
  UseCurrenciesReturn,
  UseGafpriBankTypeReturn,
  UseGafpriAccountsReceivableReturn,
} from '../../states';
import { OrderPayment } from '../Order';
import { CreditPayment } from '../Credits';
import { Loading } from '../Loading';
import { PaymentMethodsImages } from '../../Abstract';

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

export type PaymentDepositProps = {
  use: UseGafpriPaymentReturn;
  siteOptions: SiteOptions;
  useOrder: UseGafpriOrderReturn;
  useCredits: UseGafpriAccountsReceivableReturn;
  useCurrencies: UseCurrenciesReturn;
  useBankType: UseGafpriBankTypeReturn;
  logoPdf: string;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  images: PaymentMethodsImages;
};

export const PaymentDeposit = ({
  use,
  siteOptions,
  useOrder,
  useCredits,
  useCurrencies,
  useBankType,
  logoPdf,
  containerStyles = {},
  containerProps = {},
  images,
}: PaymentDepositProps): JSX.Element => {
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
        {use.subPagesDeposit.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {use.subPagesDeposit.states.isOrder && (
          <>
            <OrderPayment
              use={use}
              useOrder={useOrder}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
            />
          </>
        )}

        {use.subPagesDeposit.states.isCredits && (
          <>
            <CreditPayment
              use={use}
              useCredits={useCredits}
              siteOptions={siteOptions}
              logoPdf={logoPdf}
              useOrder={useOrder}
              images={images}
            />
          </>
        )}
      </div>
    </>
  );
};
