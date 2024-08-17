import React from 'react';
import { Loading } from '../../Loading';
import {
  FadeIn,
  InitShippingAreas,
  ShippingAreasForm,
} from '../../../Abstract';
import type { UseGafpriShippingAreasReturn } from '../../../states';

export type ShippingAreasProps = {
  use: UseGafpriShippingAreasReturn;
};

export const ShippingAreas = ({ use }: ShippingAreasProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitShippingAreas use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ShippingAreasForm use={use} formType="add" />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ShippingAreasForm use={use} formType="update" />
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
