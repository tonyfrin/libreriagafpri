import React from 'react';
import { Loading } from '../Loading';
import type { LoadingProps } from '../Loading';
import type { UseCurrenciesReturn, UseGafpriSitesReturn } from '../../states';
import { SitesForm, InitSites, FadeIn } from '../../Abstract';
import type {
  InitSitesPropsExtended,
  SitesFormPropsExtended,
} from '../../Abstract';

export type MainSitesProps = {
  useSites: UseGafpriSitesReturn;
  token: string | null;
  useCurrencies: UseCurrenciesReturn;
  loadingProps?: LoadingProps;
  initProps?: InitSitesPropsExtended;
  addFormProps?: SitesFormPropsExtended;
  updateFormProps?: SitesFormPropsExtended;
};

export type MainSitesPropsExtended = {
  useSites: UseGafpriSitesReturn;
  token: string | null;
  useCurrencies: UseCurrenciesReturn;
  loadingProps?: LoadingProps;
  initProps?: InitSitesPropsExtended;
  addFormProps?: SitesFormPropsExtended;
  updateFormProps?: SitesFormPropsExtended;
};

export const MainSites = ({
  useSites,
  useCurrencies,
  loadingProps,
  initProps,
  addFormProps,
  updateFormProps,
  token,
}: MainSitesProps): JSX.Element => {
  return (
    <>
      {useSites.pages.states.isFetching && <Loading {...loadingProps} />}
      {useSites.pages.states.isInit && (
        <FadeIn
          keyName="init"
          isVisible={useSites.pages.states.isInit}
          {...initProps}
        >
          <InitSites use={useSites} token={token} />
        </FadeIn>
      )}
      {useSites.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={useSites.pages.states.isAdd}>
          <SitesForm
            use={useSites}
            formType="add"
            useCurrencies={useCurrencies}
            {...addFormProps}
          />
        </FadeIn>
      )}
      {useSites.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={useSites.pages.states.isUpdate}>
          <SitesForm
            formType="update"
            use={useSites}
            useCurrencies={useCurrencies}
            {...updateFormProps}
          />
        </FadeIn>
      )}
    </>
  );
};
