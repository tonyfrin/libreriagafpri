import React from 'react';
import { Loading } from '../Loading';
import {
  FadeIn,
  InitWalletAccount,
  UserWalletAccountSearchForm,
  WalletAccountForm,
} from '../../Abstract';
import type { UseGafpriWalletAccountReturn, UseUserReturn } from '../../states';

export type WalletAccountProps = {
  use: UseGafpriWalletAccountReturn;
  useUser: UseUserReturn;
};

export const WalletAccount = ({
  use,
  useUser,
}: WalletAccountProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitWalletAccount use={use} />
        </FadeIn>
      )}
      {use.pages.states.isInitUser && (
        <FadeIn keyName="init-user" isVisible={use.pages.states.isInitUser}>
          <UserWalletAccountSearchForm
            use={use}
            useUser={useUser}
            returnModule={use.pages.actions.returnInit}
          />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <WalletAccountForm use={use} formType="add" />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <WalletAccountForm formType="update" use={use} />
        </FadeIn>
      )}
    </>
  );
};
