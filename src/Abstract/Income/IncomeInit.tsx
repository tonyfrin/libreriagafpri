import React from 'react';
import { css, cx } from '@emotion/css';
import { EntityIncomeSearchForm } from '../Form';
import { UseGafpriIncomeReturn, UseGafpriEntityReturn } from '../../states';

export type IncomeInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type IncomeInitProps = {
  containerStyles?: IncomeInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  useIncome: UseGafpriIncomeReturn;
  useEntity: UseGafpriEntityReturn;
  returnInitModule: () => void;
};

const incomeInitStylesContainer = (
  stayles: IncomeInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const IncomeInit = ({
  containerStyles = {},
  containerProps = {},
  useIncome,
  useEntity,
  returnInitModule,
}: IncomeInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          incomeInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <EntityIncomeSearchForm
          useIncome={useIncome}
          useEntity={useEntity}
          returnInitModule={() => returnInitModule()}
        />
      </div>
    </>
  );
};
