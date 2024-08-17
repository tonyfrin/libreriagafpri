import React from 'react';
import { css, cx } from '@emotion/css';

export type ScrollStyle = {
  maxWidth?: string;
  maxHeight?: string;
  overflowY?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  customStyle?: string;
};

const scrollableContainerStyle = (styles: ScrollStyle) => css`
  max-height: ${styles.maxWidth || '100px'};
  max-width: ${styles.maxWidth || '310px'};
  overflow-y: ${styles.overflowY || 'auto'};
  border: ${styles.border || '1px solid #ccc'};
  border-radius: ${styles.borderRadius || '4px'};
  padding: ${styles.padding || '20px'};
  margin: ${styles.margin || '0px 20px 20px 20px'};
  ${styles.customStyle || ''}
`;

export type SpanStyle = {
  fontSize?: string;
  color?: string;
  paddingLeft?: string;
  props?: string;
};

export type ScrollableContainerProps = {
  styles?: ScrollStyle;
  children: React.ReactNode;
  title?: string;
  stylesSpan?: SpanStyle;
};

const SpanStyles1 = (styles: SpanStyle) => css`
  font-size: ${styles?.fontSize || 'x-small'};
  color: ${styles?.color || '#8d8d8d'};
  padding-left: ${styles?.paddingLeft || '20px'};
  ${styles.props || ''}
`;

export const ScrollableContainer = ({
  styles = {},
  children,
  title,
  stylesSpan = {},
}: ScrollableContainerProps) => {
  return (
    <div>
      {title ? (
        <span className={cx(SpanStyles1(stylesSpan))}>{title}</span>
      ) : (
        ''
      )}
      <div className={cx(scrollableContainerStyle(styles))}>{children}</div>
    </div>
  );
};
