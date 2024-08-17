import React from 'react';
import { Loading } from '../Loading';
import {
  UseGafpriIncomeReturn,
  UseGafpriEntityReturn,
  SiteOptions,
  UseCurrenciesReturn,
} from '../../states';
import {
  FadeIn,
  MainMenuItems,
  IncomeInit,
  EntityIncomeSearch,
  IncomeForm,
  CashForm,
  CashIncomePaymentForm,
} from '../../Abstract';
import { EntityIncome } from '../Entity';
import { INCOME_ROUTE } from '../../constants';

export type IncomeCashRegisterStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  height?: string;
  custom?: string;
};

export type IncomeCashRegisterProps = {
  use: UseGafpriIncomeReturn;
  useEntity: UseGafpriEntityReturn;
  useCurrencies: UseCurrenciesReturn;
  returnInitModule: () => void;
  sitesOptions: SiteOptions;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menuEntity: MainMenuItems[];
};

export const IncomeCashRegister = ({
  use,
  useEntity,
  useCurrencies,
  returnInitModule,
  containerProps = {},
  sitesOptions,
  menuEntity,
}: IncomeCashRegisterProps): JSX.Element => {
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
          <IncomeInit
            useEntity={useEntity}
            useIncome={use}
            returnInitModule={returnInitModule}
          />
        </FadeIn>
      )}
      {use.pages.states.isAddEntity && (
        <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
          <EntityIncome use={useEntity} useIncome={use} menu={menuEntity} />
        </FadeIn>
      )}
      {use.pages.states.isIncomeForm && (
        <FadeIn
          keyName="IncomeCrForm"
          isVisible={use.pages.states.isIncomeForm}
        >
          <>
            <IncomeForm use={use} siteOptions={sitesOptions} />
          </>
        </FadeIn>
      )}
      {use.pages.states.isEntitySearch && (
        <FadeIn
          keyName="entitySearch"
          isVisible={use.pages.states.isEntitySearch}
        >
          <EntityIncomeSearch use={useEntity} useIncome={use} />
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
              returnInit: use.pages.actions.onIncomeForm,
              buttonNextId: `${INCOME_ROUTE}-2`,
              next: use.pages.actions.onFinalPaymentCrForm,
              type: 'deposit',
              cashRegisterPostsId: use.attributes.states.cashRegisterPostsId,
              cashRegisterTypePostsId:
                use.attributes.states.cashRegisterTypePostsId,
              paymentType: 'income',
            }}
          />
        </FadeIn>
      )}

      {use.pages.states.isFinalPaymentCrForm && (
        <FadeIn
          keyName="FinalPaymentCrForm"
          isVisible={use.pages.states.isFinalPaymentCrForm}
        >
          <CashIncomePaymentForm use={use} />
        </FadeIn>
      )}
    </>
  );
};
