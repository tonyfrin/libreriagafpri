import React from 'react';
import { Loading } from '../../Loading';
import { FadeIn } from '../../../Abstract';
import type {
  UseGafpriShippingMethodsReturn,
  UseRolesReturn,
} from '../../../states';
import { ShippingMethodsForm } from '../../../Abstract';

export type ShippingMethodsProps = {
  use: UseGafpriShippingMethodsReturn;
  useRoles: UseRolesReturn;
};

export const ShippingMethods = ({
  use,
  useRoles,
}: ShippingMethodsProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}

      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ShippingMethodsForm use={use} useRoles={useRoles} formType="add" />
        </FadeIn>
      )}

      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ShippingMethodsForm
            use={use}
            useRoles={useRoles}
            formType="update"
          />
        </FadeIn>
      )}
    </>
  );
};
