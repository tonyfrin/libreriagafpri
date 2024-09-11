import React from 'react';
import { Loading } from '../../Loading';
import {
  FadeIn,
  InitShippingAreas,
  ShippingAreasForm,
} from '../../../Abstract';
import type {
  UseGafpriShippingAreasReturn,
  UseLoginReturn,
} from '../../../states';

export type ShippingAreasProps = {
  use: UseGafpriShippingAreasReturn;
  useLogin: UseLoginReturn;
  keyApi: string;
};

export const ShippingAreas = ({
  use,
  useLogin,
  keyApi,
}: ShippingAreasProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitShippingAreas use={use} useLogin={useLogin} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ShippingAreasForm use={use} formType="add" keyApi={keyApi} />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ShippingAreasForm use={use} formType="update" keyApi={keyApi} />
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
