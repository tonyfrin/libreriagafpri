import React from 'react';
import { css, cx } from '@emotion/css';

export type ColHeaderTableStylesContainerProps = {
  custom?: string;
};

const colHeaderTableStylesContainer = (
  styles: ColHeaderTableStylesContainerProps
) => css`
  ${styles.custom || ''}
`;

export type ColHeaderTableProps = {
  containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
  containerStyles?: ColHeaderTableStylesContainerProps;
  children: React.ReactNode;
};

export const ColHeaderTable = ({
  containerProps = {},
  containerStyles = {},
  children,
}: ColHeaderTableProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <th
      className={cx(colHeaderTableStylesContainer(containerStyles))}
      {...restContainerProps}
    >
      {children}
    </th>
  );
};
