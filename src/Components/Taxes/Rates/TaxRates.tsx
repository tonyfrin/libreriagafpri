import React from 'react';
import { Loading } from '../../Loading';
import { FadeIn, TaxRatesForm } from '../../../Abstract';
import type { UseGafpriTaxRatesReturn } from '../../../states';

export type TaxRatesProps = {
  use: UseGafpriTaxRatesReturn;
};

export const TaxRates = ({ use }: TaxRatesProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}

      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <TaxRatesForm use={use} formType="add" />
        </FadeIn>
      )}

      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <TaxRatesForm use={use} formType="update" />
        </FadeIn>
      )}
    </>
  );
};
