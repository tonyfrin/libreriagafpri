import React from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriCashRegisterTypeReturn,
  SiteOptions,
  UseLoginReturn,
  UseGafpriExpensesReturn,
  UseCurrenciesReturn,
  UseGafpriEntityReturn,
  UseGafpriPaymentTransferCashRegisterReturn,
  UseGafpriIncomeReturn,
} from '../../states';
import {
  InitCashRegister,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  CashRegisterForm,
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

export type CashRegisterProps = {
  use: UseGafpriCashRegisterTypeReturn;
  containerStyles?: OrderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  itemsMenu: HeaderMenuItem[];
  siteOptions: SiteOptions;
  useExpenses: UseGafpriExpensesReturn;
  useCurrencies: UseCurrenciesReturn;
  useEntity: UseGafpriEntityReturn;
  entityMenu: MainMenuItems[];
  usePaymentTransferCashRegister: UseGafpriPaymentTransferCashRegisterReturn;
  useIncome: UseGafpriIncomeReturn;
  useLogin: UseLoginReturn;
  returnModule: () => void;
};

export const CashRegister = ({
  use,
  containerStyles = {},
  containerProps = {},
  itemsMenu,
  siteOptions,
  useExpenses,
  useCurrencies,
  useEntity,
  entityMenu,
  usePaymentTransferCashRegister,
  useIncome,
  useLogin,
  returnModule,
}: CashRegisterProps): JSX.Element => {
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
        <HeaderMenu items={itemsMenu} />
        {use.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}

        {use.pages.states.isInit && (
          <InitCashRegister
            use={use}
            uselogin={useLogin}
            returnModule={returnModule}
          />
        )}

        {use.pages.states.isCashPortal && (
          <CashRegisterForm
            use={use}
            siteOptions={siteOptions}
            useExpenses={useExpenses}
            useCurrencies={useCurrencies}
            useEntity={useEntity}
            entityMenu={entityMenu}
            usePaymentTransferCashRegister={usePaymentTransferCashRegister}
            useIncome={useIncome}
            useLogin={useLogin}
          />
        )}
      </div>
    </>
  );
};
