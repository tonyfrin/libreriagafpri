import React from 'react';
import { Loading } from '../Loading';
import {
  FadeIn,
  InitStorage,
  InitStoragePropsExtended,
  StorageFormPropsExtended,
  StorageForm,
} from '../../Abstract';
import type {
  UseGafpriStorageReturn,
  UseGafpriSitesReturn,
} from '../../states';

export type MainStorageProps = {
  use: UseGafpriStorageReturn;
  useSites: UseGafpriSitesReturn;
  initStorageProps?: InitStoragePropsExtended;
  addFormProps?: StorageFormPropsExtended;
  updateFormProps?: StorageFormPropsExtended;
};

export type MainStoragePropsExtended = {
  use?: UseGafpriStorageReturn;
  useSites?: UseGafpriSitesReturn;
  initStorageProps?: InitStoragePropsExtended;
  addFormProps?: StorageFormPropsExtended;
  updateFormProps?: StorageFormPropsExtended;
};

export const MainStorage = ({
  use,
  useSites,
  initStorageProps,
  addFormProps,
  updateFormProps,
}: MainStorageProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitStorage use={use} {...initStorageProps} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <StorageForm
            use={use}
            formType="add"
            {...addFormProps}
            useSites={useSites}
          />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <StorageForm
            formType="update"
            use={use}
            useSites={useSites}
            {...updateFormProps}
          />
        </FadeIn>
      )}
    </>
  );
};
