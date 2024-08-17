import React from 'react';
import { css, cx } from '@emotion/css';

export type LineHeaderTableStylesContainerProps = {
  verticalAlign?: string;
  border?: string;
  borderColor?: string;
  custom?: string;
};

const lineHeaderTableStylesContainer = (
  styles: LineHeaderTableStylesContainerProps
) => css`
  vertical-align: ${styles.verticalAlign || 'bottom'};
  border: ${styles.border || '0 solid'};
  border-color: ${styles.borderColor || 'inherit'};
  ${styles.custom || ''}
`;

export type LineHeaderTableStylesContentProps = {
  display?: string;
  custom?: string;
};

const lineHeaderTableStylesContent = (
  styles: LineHeaderTableStylesContentProps
) => css`
  ${styles.custom || ''}
`;

export type LineHeaderTableProps = {
  containerProps?: React.HTMLAttributes<HTMLTableSectionElement>;
  containerStyles?: LineHeaderTableStylesContainerProps;
  contentStyles?: LineHeaderTableStylesContentProps;
  contentProps?: React.HTMLAttributes<HTMLTableRowElement>;
  children: React.ReactNode;
};

export const LineHeaderTable = ({
  containerProps = {},
  containerStyles = {},
  children,
  contentProps = {},
  contentStyles = {},
}: LineHeaderTableProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;

  return (
    <thead
      className={cx(lineHeaderTableStylesContainer(containerStyles))}
      {...restContainerProps}
    >
      <tr
        className={cx(
          lineHeaderTableStylesContent(contentStyles),
          contentClassName
        )}
        {...restContentProps}
      >
        {children}
      </tr>
    </thead>
  );
};
