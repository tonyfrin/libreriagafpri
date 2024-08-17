import React from 'react';
import { Loading } from '../Loading';
import {
  FadeIn,
  InitCashRegisterType,
  CashRegisterTypeForm,
} from '../../Abstract';
import type {
  UseGafpriCashRegisterTypeReturn,
  UseUserReturn,
} from '../../states';

export type CashRegisterTypeProps = {
  use: UseGafpriCashRegisterTypeReturn;
  useUser: UseUserReturn;
};

export const CashRegisterType = ({
  use,
  useUser,
}: CashRegisterTypeProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitCashRegisterType use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <CashRegisterTypeForm use={use} formType="add" useUser={useUser} />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <CashRegisterTypeForm formType="update" use={use} useUser={useUser} />
        </FadeIn>
      )}
    </>
  );
};
