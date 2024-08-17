import React from 'react';
import { Loading } from '../Loading';
import type { LoadingProps } from '../Loading';
import type { UseCurrenciesReturn, UseSitesReturn } from '../../states';
import { SitesForm, InitSites, FadeIn } from '../../Abstract';
import type {
  InitSitesPropsExtended,
  SitesFormPropsExtended,
} from '../../Abstract';

export type MainSitesProps = {
  useSites: UseSitesReturn;
  useCurrencies: UseCurrenciesReturn;
  loadingProps?: LoadingProps;
  initProps?: InitSitesPropsExtended;
  addFormProps?: SitesFormPropsExtended;
  updateFormProps?: SitesFormPropsExtended;
};

export type MainSitesPropsExtended = {
  useSites: UseSitesReturn;
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
}: MainSitesProps): JSX.Element => {
  return (
    <>
      {useSites.states.isFetching && <Loading {...loadingProps} />}
      {useSites.states.isInit && (
        <FadeIn
          keyName="init"
          isVisible={useSites.states.isInit}
          {...initProps}
        >
          <InitSites use={useSites} />
        </FadeIn>
      )}
      {useSites.states.isAdd && (
        <FadeIn keyName="add" isVisible={useSites.states.isAdd}>
          <SitesForm
            use={useSites}
            formType="add"
            useCurrencies={useCurrencies}
            {...addFormProps}
          />
        </FadeIn>
      )}
      {useSites.states.isUpdate && (
        <FadeIn keyName="update" isVisible={useSites.states.isUpdate}>
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
