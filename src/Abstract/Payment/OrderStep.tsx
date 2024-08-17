import React from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  UseGafpriOrderReturn,
  SiteOptions,
} from '../../states';
import { PaymentHeader } from '../Header';
import { OrderPendingTable } from '../Table';

type OrderStylesContainerProps = {
  display?: string;
  justifyContent?: string;
  marginTop?: string;
  custom?: string;
};

const orderStepContainerStyle = (styles: OrderStylesContainerProps) => css`
  display: ${styles.display || 'flex'};
  justify-content: ${styles.justifyContent || 'center'};
  margin-top: ${styles.marginTop || '20px'};
  ${styles.custom || ''}
`;

type OrderStepContentStylesProps = {
  backgroundColor?: string;
  padding?: string;
  width?: string;
  borderRadius?: string;
  height?: string;
  margin?: string;
  custom?: string;
};

const orderStepContentStyle = (styles: OrderStepContentStylesProps) => css`
  background-color: ${styles.backgroundColor || '#fff'};
  padding: ${styles.padding || '10px 40px'};
  width: ${styles.width || '90%'};
  border-radius: ${styles.borderRadius || '10px'};
  height: ${styles.height || 'auto'};
  margin: ${styles.margin || '0'};
  ${styles.custom || ''}
`;

export type OrderStepProps = {
  use: UseGafpriPaymentReturn;
  useOrder: UseGafpriOrderReturn;
  siteOptions: SiteOptions;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentStyles?: OrderStepContentStylesProps;
  contentProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const OrderStep = ({
  use,
  useOrder,
  siteOptions,
  containerStyles = {},
  containerProps = {},
  contentStyles = {},
  contentProps = {},
}: OrderStepProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;

  return (
    <>
      <PaymentHeader
        error={use.error.states.error}
        moduleName="Modulo de entradas"
        stepName="Pedidos en espera"
        step="1"
        returnFunction={use.pages.actions.returnInit}
        returnTitle="Inicio"
        nextTitle="Creditos"
        nextFunction={use.subPagesDeposit.actions.onCredits}
      />
      <div
        className={cx(
          orderStepContainerStyle(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <div
          className={cx(orderStepContentStyle(contentStyles), contentClassName)}
          {...restContentProps}
        >
          <OrderPendingTable use={useOrder} siteOptions={siteOptions} />
        </div>
      </div>
    </>
  );
};
