import React from 'react';
import { css, cx } from '@emotion/css';

export type LineCol1StylesContainerProps = {
  width?: string;
  custom?: string;
};

export type LineCol1StylesContentProps = {
  margin?: string;
  custom?: string;
};

const lineCol1StylesContainer = (styles: LineCol1StylesContainerProps) => css`
  width: ${styles.width || '8.333333333%'};
  ${styles.custom || ''}
`;

export type LineCol1Props = {
  containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
  containerStyles?: LineCol1StylesContainerProps;
  children: React.ReactNode;
};

export const LineCol1 = ({
  containerProps = {},
  containerStyles = {},
  children,
}: LineCol1Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <td
      className={cx(lineCol1StylesContainer(containerStyles))}
      {...restContainerProps}
    >
      {children}
    </td>
  );
};
