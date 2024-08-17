import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { EntityBudgetSearchForm } from '../Form';
import { UseGafpriBudgetReturn, UseGafpriEntityReturn } from '../../states';
import { UseGafpriPagesSalesModuleReturn } from '../states';

export type BudgetInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type BudgetInitProps = {
  containerStyles?: BudgetInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useBudget: UseGafpriBudgetReturn;
  useEntity: UseGafpriEntityReturn;
  usePagesMain: UseGafpriPagesSalesModuleReturn;
  uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const budgetInitStylesContainer = (
  stayles: BudgetInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const BudgetInit = ({
  containerStyles = {},
  containerProps = {},
  useBudget,
  useEntity,
  usePagesMain,
  uploadBudget,
}: BudgetInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          budgetInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <EntityBudgetSearchForm
          useBudget={useBudget}
          useEntity={useEntity}
          usePagesSalesModule={usePagesMain}
          uploadBudget={uploadBudget}
        />
      </div>
    </>
  );
};
