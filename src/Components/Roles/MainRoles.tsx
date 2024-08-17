import React from 'react';
import { Loading } from '../Loading';
import { FadeIn, InitRoles, RolesForm } from '../../Abstract';
import type {
  InitRolesPropsExtended,
  RolesFormPropsExtended,
} from '../../Abstract';
import type { UseRolesReturn } from '../../states';

export type MainRolesProps = {
  use: UseRolesReturn;
  initProps?: InitRolesPropsExtended;
  addFormProps?: RolesFormPropsExtended;
  updateFormProps?: RolesFormPropsExtended;
};

export type MainRolesPropsExtended = {
  use?: UseRolesReturn;
  initProps?: InitRolesPropsExtended;
  addFormProps?: RolesFormPropsExtended;
  updateFormProps?: RolesFormPropsExtended;
};

export const MainRoles = ({
  use,
  initProps,
  addFormProps,
  updateFormProps,
}: MainRolesProps): JSX.Element => {
  return (
    <>
      {use.states.isFetching && <Loading />}
      {use.states.isInit && (
        <FadeIn keyName="init" isVisible={use.states.isInit}>
          <InitRoles use={use} {...initProps} />
        </FadeIn>
      )}
      {use.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.states.isAdd}>
          <RolesForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.states.isUpdate}>
          <RolesForm formType="update" use={use} {...updateFormProps} />
        </FadeIn>
      )}
    </>
  );
};
