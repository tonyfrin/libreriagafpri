import React from 'react';
import { Loading } from '../../Loading';
import { FadeIn, InitTaxClasses, TaxClassesForm } from '../../../Abstract';
import type { UseGafpriTaxClassesReturn } from '../../../states';

export type TaxClassesProps = {
  use: UseGafpriTaxClassesReturn;
};

export const TaxClasses = ({ use }: TaxClassesProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitTaxClasses use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <TaxClassesForm use={use} formType="add" />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <TaxClassesForm use={use} formType="update" />
        </FadeIn>
      )}
      {/* {use.states.isView && 
          <FadeIn keyName="view" isVisible={use.states.isView}>
            <UserView
              use={use}
              useSites={useSites}
            />
          </FadeIn>
        } */}
    </>
  );
};
