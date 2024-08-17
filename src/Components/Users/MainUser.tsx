import React from 'react';
import { Loading } from '../Loading';
import type { UseUserReturn } from '../../states';
import {
  InitUser,
  UserForm,
  UserView,
  UserFormUpdate,
  FadeIn,
} from '../../Abstract';
import type {
  InitUserPropsExtended,
  UserFormPropsExtended,
  UserFormUpdatePropsExtended,
  UserViewPropsExtended,
} from '../../Abstract';

export type MainUserProps = {
  use: UseUserReturn;
  initProps?: InitUserPropsExtended;
  addFormProps?: UserFormPropsExtended;
  updateFormProps?: UserFormUpdatePropsExtended;
  viewFormProps?: UserViewPropsExtended;
};

export type MainUserPropsExtended = {
  use?: UseUserReturn;
  initProps?: InitUserPropsExtended;
  addFormProps?: UserFormPropsExtended;
  updateFormProps?: UserFormUpdatePropsExtended;
  viewFormProps?: UserViewPropsExtended;
};

export const MainUser = ({
  use,
  initProps,
  addFormProps,
  updateFormProps,
  viewFormProps,
}: MainUserProps): JSX.Element => {
  return (
    <>
      {use.states.isFetching && <Loading />}
      {use.states.isInit && (
        <FadeIn keyName="init" isVisible={use.states.isInit}>
          <InitUser use={use} {...initProps} />
        </FadeIn>
      )}
      {use.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.states.isAdd}>
          <UserForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.states.isUpdate}>
          <UserFormUpdate use={use} {...updateFormProps} />
        </FadeIn>
      )}
      {use.states.isView && (
        <FadeIn keyName="view" isVisible={use.states.isView}>
          <UserView use={use} {...viewFormProps} />
        </FadeIn>
      )}
    </>
  );
};
