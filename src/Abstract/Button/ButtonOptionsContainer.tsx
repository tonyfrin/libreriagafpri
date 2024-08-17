import React from 'react';
import { Button, ButtonProps } from './Button';
import { css, cx } from '@emotion/css';

export type ButtonOptionsContainerProps = {
  props: ButtonProps;
  containerStayles?: StylesContainer;
};

export type StylesContainer = {
  display?: string;
  justifyContent?: string;
  width?: string;
  customStyles?: string;
};

const containerStaylesDefault = (stayles: StylesContainer) => css`
  display: ${stayles?.display || 'flex'};
  justify-content: ${stayles?.justifyContent || 'space-evenly'};
  width: ${stayles?.justifyContent || '100%'};
  ${stayles?.customStyles || ''}
`;

export const ButtonOptionsContainer = ({
  props,
  containerStayles = {},
}: ButtonOptionsContainerProps) => {
  return (
    <>
      <div className={cx(containerStaylesDefault(containerStayles))}>
        <Button {...props} />
      </div>
    </>
  );
};
