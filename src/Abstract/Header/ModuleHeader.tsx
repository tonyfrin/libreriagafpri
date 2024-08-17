import React from 'react';
import { css, cx } from '@emotion/css';

export type ModuleHeaderStylesContainerProps = {
  display?: string;
  borderTop?: string;
  marginTop?: string;
  custom?: string;
};

const ModuleHeaderStylesContainer = (
  styles: ModuleHeaderStylesContainerProps
) => css`
  display: ${styles.display || 'flex'};
  border-top: ${styles.borderTop || '1px solid #dee2e6'};
  margin-top: ${styles.marginTop || '20px'};
  ${styles.custom || ''}
`;

export type ModuleHeaderProps = {
  containerStyles?: ModuleHeaderStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
};

export const ModuleHeader = ({
  containerStyles = {},
  containerProps = {},
  children,
}: ModuleHeaderProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  return (
    <>
      <div
        className={cx(
          ModuleHeaderStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {children}
      </div>
    </>
  );
};
