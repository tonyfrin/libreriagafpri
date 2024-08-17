import React from 'react';
import { css, cx } from '@emotion/css';

export type SpanValueStylesContentProps = {
  margin?: string;
  custom?: string;
};

const spanValueStylesContent = (styles: SpanValueStylesContentProps) => css`
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

export type SpanValueProps = {
  value: string;
  containerProps?: React.HTMLAttributes<HTMLSpanElement>;
  containerStyles?: SpanValueStylesContentProps;
};

export const SpanValue = ({
  value,
  containerProps = {},
  containerStyles = {},
}: SpanValueProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <span
      className={cx(
        spanValueStylesContent(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      {value}
    </span>
  );
};
