import React from 'react';
import { Loading } from '../Loading';
import {
  FadeIn,
  InitProjects,
  InitProjectsPropsExtended,
  ProjectsForm,
  ProjectsFormPropsExtended,
} from '../../Abstract';
import type { UseGafpriProjectsReturn } from '../../states';

export type MainProjectsProps = {
  use: UseGafpriProjectsReturn;
  initProjectsProps?: InitProjectsPropsExtended;
  addFormProps?: ProjectsFormPropsExtended;
  updateFormProps?: ProjectsFormPropsExtended;
};

export type MainCurrenciesPropsExtended = {
  use?: UseGafpriProjectsReturn;
  initProjectsProps?: InitProjectsPropsExtended;
  addFormProps?: ProjectsFormPropsExtended;
  updateFormProps?: ProjectsFormPropsExtended;
};

export const MainProjects = ({
  use,
  initProjectsProps,
  addFormProps,
  updateFormProps,
}: MainProjectsProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitProjects use={use} {...initProjectsProps} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ProjectsForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ProjectsForm formType="update" use={use} {...updateFormProps} />
        </FadeIn>
      )}
    </>
  );
};
