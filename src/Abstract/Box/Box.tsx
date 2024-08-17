import React from 'react';
import { cx, css } from '@emotion/css';

const Box1Styles = (styles: Box1Style) => css`
  transition: ${styles.transition || 'all 1s ease 0s'};
  background-color: ${styles.backgroundColor || '#fff'};
  padding: ${styles.padding || '40px'};
  width: ${styles.width || '70%'};
  border-radius: ${styles.borderRadius || '10px'};
  height: ${styles.height || '63vh'};
  margin: ${styles.margin || '30px auto'};

  @media (max-width: 500px) {
    padding: ${styles.media500Style?.padding || '15px 35px'};
    width: ${styles.media500Style?.width || '75%'};
  }

  @media (max-width: 400px) {
    padding: ${styles.media400Style?.padding || '15px 35px'};
    width: ${styles.media400Style?.width || '78%'};
  }

  @media (max-width: 300px) {
    padding: ${styles.media300Style?.padding || '15px 40px 15px 8px'};
    width: ${styles.media300Style?.width || '80%'};
  }
`;

type Box1Media500Style = {
  padding: string | number | undefined;
  width: string | number;
};

type Box1Media400Style = {
  padding: string | number;
  width: string | number;
};

type Box1Media300Style = {
  padding: string | number;
  width: string | number;
};

export type Box1Style = {
  backgroundColor?: string;
  padding?: string | number;
  width?: string | number;
  borderRadius?: string | number;
  height?: string | number;
  media500Style?: Box1Media500Style | undefined;
  media400Style?: Box1Media400Style | undefined;
  media300Style?: Box1Media300Style | undefined;
  margin?: string | number;
  transition?: string;
};

export type Box1Props = {
  styles?: Box1Style | undefined;
  children: JSX.Element;
  Class?: string;
};

export const Box1 = ({ styles = {}, children, Class = '' }: Box1Props) => {
  return <div className={cx(Box1Styles(styles), Class)}>{children}</div>;
};
