import React from 'react';

import { Loading } from '../Loading';
import { FadeIn, InitCurrencies, CurrencyForm } from '../../Abstract';
import type {
  InitCurrenciesPropsExtended,
  CurrencyFormPropsExtended,
} from '../../Abstract';
import type { UseCurrenciesReturn } from '../../states';

export type MainCurrenciesProps = {
  useCurrencies: UseCurrenciesReturn;
  initCurrenciesProps?: InitCurrenciesPropsExtended;
  addFormProps?: CurrencyFormPropsExtended;
  updateFormProps?: CurrencyFormPropsExtended;
};

export type MainCurrenciesPropsExtended = {
  useCurrencies?: UseCurrenciesReturn;
  initCurrenciesProps?: InitCurrenciesPropsExtended;
  addFormProps?: CurrencyFormPropsExtended;
  updateFormProps?: CurrencyFormPropsExtended;
};

export const MainCurrencies = ({
  useCurrencies,
  initCurrenciesProps,
  addFormProps,
  updateFormProps,
}: MainCurrenciesProps): JSX.Element => {
  return (
    <>
      {useCurrencies.states.isFetching && <Loading />}
      {useCurrencies.states.isInit && (
        <FadeIn keyName="init" isVisible={useCurrencies.states.isInit}>
          <InitCurrencies use={useCurrencies} {...initCurrenciesProps} />
        </FadeIn>
      )}
      {useCurrencies.states.isAdd && (
        <FadeIn keyName="add" isVisible={useCurrencies.states.isAdd}>
          <CurrencyForm use={useCurrencies} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {useCurrencies.states.isUpdate && (
        <FadeIn keyName="update" isVisible={useCurrencies.states.isUpdate}>
          <CurrencyForm
            formType="update"
            use={useCurrencies}
            {...updateFormProps}
          />
        </FadeIn>
      )}
    </>
  );
};
