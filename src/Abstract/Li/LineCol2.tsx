import React from 'react';
import { css, cx } from '@emotion/css';

export type LineCol2StylesContainerProps = {
  width?: string;
  custom?: string;
};

export type LineCol2StylesContentProps = {
  margin?: string;
  custom?: string;
};

const lineCol2StylesContainer = (styles: LineCol2StylesContainerProps) => css`
  width: ${styles.width || '16.6666667%'};
  ${styles.custom || ''}
`;

export type LineCol2Props = {
  containerProps?: React.HTMLAttributes<HTMLTableCellElement>;
  containerStyles?: LineCol2StylesContainerProps;
  children: React.ReactNode;
};

export const LineCol2 = ({
  containerProps = {},
  containerStyles = {},
  children,
}: LineCol2Props) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <td
      className={cx(lineCol2StylesContainer(containerStyles))}
      {...restContainerProps}
    >
      {children}
    </td>
  );
};
