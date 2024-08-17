import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { OrderReturnInitForm } from '../Form';
import { UseGafpriOrderReturnReturn } from '../../states';

export type OrderReturnInitStylesContainerProps = {
  maxWidht?: string;
  margin?: string;
  custom?: string;
};

export type OrderReturnInitProps = {
  containerStyles?: OrderReturnInitStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  use: UseGafpriOrderReturnReturn;
  returnModule: () => void;
};

const orderReturnInitStylesContainer = (
  stayles: OrderReturnInitStylesContainerProps
) => css`
  max-width: ${stayles.maxWidht || '900px'};
  margin: ${stayles.margin || 'auto'};
  ${stayles.custom || ''}
`;

export const OrderReturnInit = ({
  containerStyles = {},
  containerProps = {},
  use,
  returnModule,
}: OrderReturnInitProps): JSX.Element => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          orderReturnInitStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <OrderReturnInitForm use={use} returnModule={returnModule} />
      </div>
    </>
  );
};
