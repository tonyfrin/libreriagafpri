import React from 'react';
import { Loading } from '../Loading';
import {
  FadeIn,
  InitEntity,
  EntityAddForm,
  EntityUpdateForm,
  AddressAddForm,
  DocumentAddForm,
} from '../../Abstract';
import { UseGafpriEntityReturn } from '../../states';

export type EntityProps = {
  use: UseGafpriEntityReturn;
};

export const Entity = ({ use }: EntityProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitEntity use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <EntityAddForm use={use} formType={use.attributes.states.formType} />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <EntityUpdateForm use={use} />
        </FadeIn>
      )}

      {use.pages.states.isAddAddress && (
        <FadeIn keyName="addAddress" isVisible={use.pages.states.isAddAddress}>
          <AddressAddForm use={use} />
        </FadeIn>
      )}
      {use.pages.states.isAddDocument && (
        <FadeIn
          keyName="addDocument"
          isVisible={use.pages.states.isAddDocument}
        >
          <DocumentAddForm use={use} />
        </FadeIn>
      )}
    </>
  );
};
