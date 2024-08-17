import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { EntityAccountsReceivableSearchForm } from '../Form';
import {
  UseGafpriAccountsReceivableReturn,
  UseGafpriEntityReturn,
} from '../../states';
import { UseGafpriPagesSalesModuleReturn } from '../states';

export type InitAddAccountsReceivableStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type InitAddAccountsReceivableProps = {
  containerStyles?: InitAddAccountsReceivableStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  use: UseGafpriAccountsReceivableReturn;
  useEntity: UseGafpriEntityReturn;
};

const initAddAccountsReceivableStylesContainer = (
  stayles: InitAddAccountsReceivableStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const InitAddAccountsReceivable = ({
  containerStyles = {},
  containerProps = {},
  use,
  useEntity,
}: InitAddAccountsReceivableProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          initAddAccountsReceivableStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <EntityAccountsReceivableSearchForm
          use={use}
          useEntity={useEntity}
          returnModule={use.pages.actions.returnInit}
        />
      </div>
    </>
  );
};
