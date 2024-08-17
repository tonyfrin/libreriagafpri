import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Loading } from '../Loading';
import {
  UseGafpriProductsReturn,
  UseGafpriAccountsReceivableReturn,
  UseGafpriEntityReturn,
  SiteOptions,
} from '../../states';
import {
  FadeIn,
  HeaderMenu,
  HeaderMenuItem,
  MainMenuItems,
  UseGafpriPagesSalesModuleReturn,
  InitAccountsReceivable,
  EntityAccountsReceivableSearch,
  Sales,
  InitAddAccountsReceivable,
  AccountsReceivableAddForm,
  AccountsReceivableLoginForm,
  AccountsReceivableLoginUpdateForm,
  AccountsReceivableUpdateForm,
} from '../../Abstract';
import { EntityAccountsReceivable } from '../Entity';

export type AccountsReceivableStylesContainerProps = {
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  minHeight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  custom?: string;
};

const accountsReceivableStylesContainer = (
  stayles: AccountsReceivableStylesContainerProps
) => css`
  padding-top: ${stayles.paddingTop || '60px'};
  padding-bottom: ${stayles.paddingBottom || '50px'};
  min-height: ${stayles.minHeight || '100vh'};
  ${stayles.backgroundImage &&
  `background-image: url(${stayles.backgroundImage});`}
  background-repeat: ${stayles.backgroundRepeat || 'no-repeat'};
  background-size: ${stayles.backgroundSize || '345vh'};
  ${stayles.custom || ''}
`;

export type AccountsReceivableProps = {
  use: UseGafpriAccountsReceivableReturn;
  useEntity: UseGafpriEntityReturn;
  sitesOptions: SiteOptions;
  containerStyles?: AccountsReceivableStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  menuEntity: MainMenuItems[];
};

export const AccountsReceivable = ({
  use,
  useEntity,
  containerStyles = {},
  containerProps = {},
  sitesOptions,
  menuEntity,
}: AccountsReceivableProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          accountsReceivableStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {use.pages.states.isFetching && (
          <Loading
            mainStyles={{
              custom: 'height: 100vh;',
            }}
          />
        )}
        {use.pages.states.isInit && (
          <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
            <InitAccountsReceivable use={use} siteOptions={sitesOptions} />
          </FadeIn>
        )}
        {use.pages.states.isInitAdd && (
          <FadeIn keyName="init-add" isVisible={use.pages.states.isInitAdd}>
            <InitAddAccountsReceivable use={use} useEntity={useEntity} />
          </FadeIn>
        )}

        {use.pages.states.isAddEntity && (
          <FadeIn keyName="addEntity" isVisible={use.pages.states.isAddEntity}>
            <EntityAccountsReceivable
              use={useEntity}
              useAccountsReceivable={use}
              menu={menuEntity}
            />
          </FadeIn>
        )}
        {use.pages.states.isForm && (
          <FadeIn keyName="form" isVisible={use.pages.states.isForm}>
            <>
              <AccountsReceivableAddForm use={use} siteOptions={sitesOptions} />
            </>
          </FadeIn>
        )}
        {use.pages.states.isFormUpdate && (
          <FadeIn
            keyName="form-update"
            isVisible={use.pages.states.isFormUpdate}
          >
            <>
              <AccountsReceivableUpdateForm
                use={use}
                siteOptions={sitesOptions}
              />
            </>
          </FadeIn>
        )}
        {use.pages.states.isEntitySearch && (
          <FadeIn
            keyName="entitySearch"
            isVisible={use.pages.states.isEntitySearch}
          >
            <EntityAccountsReceivableSearch
              use={useEntity}
              useAccountsReceivable={use}
            />
          </FadeIn>
        )}
        {use.pages.states.isLoginForm && (
          <FadeIn keyName="login-form" isVisible={use.pages.states.isLoginForm}>
            <>
              <AccountsReceivableLoginForm use={use} />
            </>
          </FadeIn>
        )}

        {use.pages.states.isLoginUpdateForm && (
          <FadeIn
            keyName="login-update-form"
            isVisible={use.pages.states.isLoginUpdateForm}
          >
            <>
              <AccountsReceivableLoginUpdateForm use={use} />
            </>
          </FadeIn>
        )}
      </div>
    </>
  );
};
