import React from 'react';
import { css, cx } from '@emotion/css';

export type SimpleTableStylesContainerProps = {
  padding?: string;
  margin?: string;
  width?: string;
  custom?: string;
};

export type SimpleTableStylesContentProps = {
  width?: string;
  marginBotton?: string;
  borderColor?: string;
  textAlign?: string;
  fontSize?: string;
  borderTop?: string;
  borderBottom?: string;
  custom?: string;
};

const simpleTableStylesContainer = (
  styles: SimpleTableStylesContainerProps
) => css`
  padding: ${styles.padding || '0px'};
  margin: ${styles.margin || '10px 0px'};
  width: ${styles.width || '100%'};
  ${styles.custom || ''}
`;

const simpleTableStylesContent = (styles: SimpleTableStylesContentProps) => css`
  width: ${styles.width || '100%'};
  margin-bottom: ${styles.marginBotton || '1rem'};
  border-color: ${styles.borderColor || '#dee2e6'};
  text-align: ${styles.textAlign || 'center'};
  font-size: ${styles.fontSize || '12px'};
  border-top: ${styles.borderTop || '1px solid #dee2e6'};
  border-bottom: ${styles.borderBottom || '1px solid #dee2e6'};
  ${styles.custom || ''}
`;

export interface SimpleTableProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  containerStyles?: SimpleTableStylesContainerProps;
  contentStyles?: SimpleTableStylesContentProps;
  contentProps?: React.HTMLAttributes<HTMLTableElement>;
}

export const SimpleTable = ({
  header,
  body,
  containerProps = {},
  containerStyles = {},
  contentStyles = {},
  contentProps = {},
}: SimpleTableProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentClassName, ...restContentProps } = contentProps;
  return (
    <>
      <div
        className={cx(
          simpleTableStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <table
          className={cx(
            simpleTableStylesContent(contentStyles),
            contentClassName
          )}
          {...restContentProps}
        >
          {header}
          {body}
        </table>
      </div>
    </>
  );
};
