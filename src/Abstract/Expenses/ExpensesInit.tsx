import React from 'react';
import { css, cx } from '@emotion/css';
import { EntityExpensesSearchForm } from '../Form';
import { UseGafpriExpensesReturn, UseGafpriEntityReturn } from '../../states';

export type ExpensesInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type ExpensesInitProps = {
  containerStyles?: ExpensesInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useExpenses: UseGafpriExpensesReturn;
  useEntity: UseGafpriEntityReturn;
  returnInitModule: () => void;
};

const expensesInitStylesContainer = (
  stayles: ExpensesInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const ExpensesInit = ({
  containerStyles = {},
  containerProps = {},
  useExpenses,
  useEntity,
  returnInitModule,
}: ExpensesInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          expensesInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <EntityExpensesSearchForm
          useExpenses={useExpenses}
          useEntity={useEntity}
          returnInitModule={() => returnInitModule()}
        />
      </div>
    </>
  );
};
