import React from 'react';
import type { UseTypeDocumentIdReturn } from '../../states';
import { Loading } from '../Loading';
import { FadeIn } from '../../Abstract';
import { InitTypeDocumentId, TypeDocumentIdForm } from '../../Abstract';
import type {
  InitTypeDocumentIdPropsExtended,
  TypeDocumentIdFormPropsExtended,
} from '../../Abstract';

export type MainTypeDocumentIdProps = {
  use: UseTypeDocumentIdReturn;
  initProps?: InitTypeDocumentIdPropsExtended;
  addFormProps?: TypeDocumentIdFormPropsExtended;
  updateFormProps?: TypeDocumentIdFormPropsExtended;
};

export type MainTypeDocumentIdPropsExtend = {
  use: UseTypeDocumentIdReturn;
  initProps?: InitTypeDocumentIdPropsExtended;
  addFormProps?: TypeDocumentIdFormPropsExtended;
  updateFormProps?: TypeDocumentIdFormPropsExtended;
};

export const MainTypeDocumentId = ({
  use,
  initProps,
  addFormProps,
  updateFormProps,
}: MainTypeDocumentIdProps): JSX.Element => {
  return (
    <>
      {use.states.isFetching && <Loading />}
      {use.states.isInit && (
        <FadeIn keyName="init" isVisible={use.states.isInit}>
          <InitTypeDocumentId use={use} {...initProps} />
        </FadeIn>
      )}
      {use.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.states.isAdd}>
          <TypeDocumentIdForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.states.isUpdate}>
          <TypeDocumentIdForm
            formType="update"
            use={use}
            {...updateFormProps}
          />
        </FadeIn>
      )}
    </>
  );
};
