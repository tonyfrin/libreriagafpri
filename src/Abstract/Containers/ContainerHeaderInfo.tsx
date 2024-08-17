import React from 'react';
import { css, cx } from '@emotion/css';

export type ContainerHeaderInfoStylesContainerProps = {
  width?: string;
  borderRight?: string;
  margin?: string;
  custom?: string;
};

const ContainerHeaderInfoStylesContainer = (
  stayles: ContainerHeaderInfoStylesContainerProps
) => css`
  width: ${stayles.width || '50%'};
  border-right: ${stayles.borderRight || '1px solid #dee2e6'};
  margin: ${stayles.margin || '1em'};
  ${stayles.custom || ''}
`;

export type ContainerHeaderInfoProps = {
  containerStyles?: ContainerHeaderInfoStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
};

export const ContainerHeaderInfo = ({
  containerStyles = {},
  containerProps = {},
  children,
}: ContainerHeaderInfoProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <>
      <div
        className={cx(
          ContainerHeaderInfoStylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        {children}
      </div>
    </>
  );
};
