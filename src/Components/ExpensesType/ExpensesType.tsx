import React from 'react';
import type { UseGafpriExpensesTypeReturn } from 'src/states';
import { Loading } from '../Loading';
import { FadeIn, InitExpensesType, ExpensesTypeForm } from '../../Abstract';
import type {
  InitExpensesTypePropsExtended,
  ExpensesTypeFormPropsExtended,
} from '../../Abstract';

export type ExpensesTypeProps = {
  use: UseGafpriExpensesTypeReturn;
  initProps?: InitExpensesTypePropsExtended;
  addFormProps?: ExpensesTypeFormPropsExtended;
  updateFromProps?: ExpensesTypeFormPropsExtended;
};

export type ExpensesTypePropsExtended = {
  use: UseGafpriExpensesTypeReturn;
  initProps?: InitExpensesTypePropsExtended;
  addFormProps?: ExpensesTypeFormPropsExtended;
  updateFromProps?: ExpensesTypeFormPropsExtended;
};

export const ExpensesType = ({
  use,
  initProps,
  addFormProps,
  updateFromProps,
}: ExpensesTypeProps): JSX.Element => {
  return (
    <>
      {use.pages.states.isFetching && <Loading />}
      {use.pages.states.isInit && (
        <FadeIn keyName="init" isVisible={use.pages.states.isInit}>
          <InitExpensesType use={use} {...initProps} />
        </FadeIn>
      )}
      {use.pages.states.isAdd && (
        <FadeIn keyName="add" isVisible={use.pages.states.isAdd}>
          <ExpensesTypeForm use={use} formType="add" {...addFormProps} />
        </FadeIn>
      )}
      {use.pages.states.isUpdate && (
        <FadeIn keyName="update" isVisible={use.pages.states.isUpdate}>
          <ExpensesTypeForm formType="update" use={use} {...updateFromProps} />
        </FadeIn>
      )}
    </>
  );
};
