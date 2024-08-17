import React from 'react';
import { css, cx } from '@emotion/css';

const GloboStyles = (styles: GloboStyle) => css`
  width: ${styles.width || '30px'};
  height: ${styles.height || '30px'};
  padding: ${styles.padding || '5px 15px'};
  background-color: ${styles.backgroundColor || '#324375'};
  border-radius: ${styles.borderRadius || '100%'};
  color: ${styles.color || '#ffffff'};
  font-weight: ${styles.fontWeight || '800'};
  margin: ${styles.margin || '2% 2% 2% 6%'};
  font-size: ${styles.fontSize || '20px'};
`;

export type GloboStyle = {
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
  fontSize?: string;
};

type Globo = {
  styles?: GloboStyle | undefined;
  step: string;
  globoClass?: string | undefined;
};

export const Globo = ({ styles = {}, step, globoClass = '' }: Globo) => {
  return (
    <>
      <span className={cx(GloboStyles(styles), globoClass)}>{step}</span>
    </>
  );
};
