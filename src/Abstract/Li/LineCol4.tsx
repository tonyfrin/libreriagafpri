import React from 'react';
import { css, cx } from '@emotion/css';

export type LineCol4StylesContainerProps = {
  width?: string;
  custom?: string;
};

export type LineCol4StylesContentProps = {
  margin?: string;
  custom?: string;
};

const lineCol4StylesContainer = (styles: LineCol4StylesContainerProps) => css`
  width: ${styles.width || '33.33333333%'};
  ${styles.custom || ''}
`;

export type LineCol4Props = {
  containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
  containerStyles?: LineCol4StylesContainerProps;
  children: React.ReactNode;
};

export const LineCol4 = ({
  containerProps = {},
  containerStyles = {},
  children,
}: LineCol4Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <td
      className={cx(lineCol4StylesContainer(containerStyles))}
      {...restContainerProps}
    >
      {children}
    </td>
  );
};
