import React from 'react';
import { Loading } from '../Loading';
import { FadeIn, InitBankType, BankTypeForm } from '../../Abstract';
import type {
  UseGafpriBankTypeReturn,
  UseCurrenciesReturn,
} from '../../states';

export type BankTypeProps = {
  use: UseGafpriBankTypeReturn;
  useCurrencies: UseCurrenciesReturn;
};

export const BankType = ({
  use,
  useCurrencies,
}: BankTypeProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitBankType use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <BankTypeForm
            use={use}
            formType="add"
            useCurrencies={useCurrencies}
          />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <BankTypeForm
            formType="update"
            use={use}
            useCurrencies={useCurrencies}
          />
        </FadeIn>
      )}
    </>
  );
};
