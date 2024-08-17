import React from 'react';
import { css, cx } from '@emotion/css';

export type InputCartStylesContentProps = {
  fontSize?: string;
  padding?: string;
  width?: string;
  border?: string;
  textAlign?: string;
  outline?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontWeight?: string;
  color?: string;
  custom?: string;
};

const inputCartStylesContent = (styles: InputCartStylesContentProps) => css`
  font-size: ${styles.fontSize || '12px'};
  padding: ${styles.padding || '5px 5px 5px 10px'};
  width: ${styles.width || '50px'};
  border: ${styles.border || '2px solid #eaeaea'};
  text-align: ${styles.textAlign || 'left'};
  outline: ${styles.outline || '0'};
  border-radius: ${styles.borderRadius || '6px'};
  background-color: ${styles.backgroundColor || '#fff'};
  font-weight: ${styles.fontWeight || '300'};
  color: ${styles.color || '#8D8D8D'};
  ${styles.custom || ''}
`;

export type InputCartProps = {
  contentStyles?: InputCartStylesContentProps;
  contentProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const InputCart = ({
  contentStyles = {},
  contentProps = {},
}: InputCartProps) => {
  const {
    className: contentClassName,
    type: contentType,
    min: contentMin,
    step: contentStep,
    ...restContentProps
  } = contentProps;

  return (
    <>
      <input
        className={cx(inputCartStylesContent(contentStyles), contentClassName)}
        type={contentType || 'number'}
        min={contentMin || '0'}
        step={contentStep || '1'}
        {...restContentProps}
      />
    </>
  );
};
