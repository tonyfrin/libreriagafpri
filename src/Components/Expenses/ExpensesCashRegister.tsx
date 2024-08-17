import React from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriExpensesReturn,
  UseGafpriEntityReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import {
  FadeIn,
  MainMenuItems,
  ExpensesInit,
  EntityExpensesSearch,
  ExpensesForm,
  CashForm,
  CashExpensesPaymentForm,
} from '../../Abstract';
import { EntityExpenses } from '../Entity';
import { EXPENSES_ROUTE } from '../../constants';

export type ExpensesCashRegisterStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

export type ExpensesCashRegisterProps = {
  use: UseGafpriExpensesReturn;
  useEntity: UseGafpriEntityReturn;
  useCurrencies: UseCurrenciesReturn;
  returnInitModule: () => void;
  sitesOptions: SiteOptions;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menuEntity: MainMenuItems[];
};

export const ExpensesCashRegister = ({
  use,
  useEntity,
  useCurrencies,
  returnInitModule,
  containerProps = {},
  sitesOptions,
  menuEntity,
}: ExpensesCashRegisterProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      {use.pages.states.isFetching && (
        <Loading
          mainStyles={{
            custom: 'height: 100vh;',
          }}
        />
      )}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <ExpensesInit
            useEntity={useEntity}
            useExpenses={use}
            returnInitModule={returnInitModule}
          />
        </FadeIn>
      )}
      {use.pages.states.isAddEntity && (
        <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
          <EntityExpenses use={useEntity} useExpenses={use} menu={menuEntity} />
        </FadeIn>
      )}
      {use.pages.states.isExpensesForm && (
        <FadeIn
          keyName="ExpensesCrForm"
          isVisible={use.pages.states.isExpensesForm}
        >
          <>
            <ExpensesForm use={use} siteOptions={sitesOptions} />
          </>
        </FadeIn>
      )}
      {use.pages.states.isEntitySearch && (
        <FadeIn
          keyName="entitySearch"
          isVisible={use.pages.states.isEntitySearch}
        >
          <EntityExpensesSearch use={useEntity} useExpenses={use} />
        </FadeIn>
      )}
      {use.pages.states.isPaymentCrForm && (
        <FadeIn
          keyName="PaymentCrForm"
          isVisible={use.pages.states.isPaymentCrForm}
        >
          <CashForm
            useError={use.error}
            siteOptions={sitesOptions}
            useCurrencies={useCurrencies}
            usePayment={use.attributes.usePayment}
            currentPaymentInfo={{
              validationButtonNext:
                use.attributes.actions.validationButtonNextPaymentCr,
              returnInit: use.pages.actions.onExpensesForm,
              buttonNextId: `${EXPENSES_ROUTE}-2`,
              next: use.pages.actions.onFinalPaymentCrForm,
              type: 'debit',
              cashRegisterPostsId: use.attributes.states.cashRegisterPostsId,
              cashRegisterTypePostsId:
                use.attributes.states.cashRegisterTypePostsId,
              paymentType: 'expenses',
            }}
          />
        </FadeIn>
      )}

      {use.pages.states.isFinalPaymentCrForm && (
        <FadeIn
          keyName="FinalPaymentCrForm"
          isVisible={use.pages.states.isFinalPaymentCrForm}
        >
          <CashExpensesPaymentForm use={use} />
        </FadeIn>
      )}
    </>
  );
};
