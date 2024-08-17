import React, { ButtonHTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';

const ButtonStyles = (styles: ButtonStyle) => css`
  background-color: ${styles.backgroundColor || 'rgb(7, 178, 231)'};
  font-size: ${styles.fontSize || '16px'};
  border-radius: ${styles.borderRadius || '0.25rem'};
  padding: ${styles.padding || '0.375rem 0.75rem'};
  user-select: ${styles.userSelect || 'none'};
  text-align: ${styles.textAlign || 'center'};
  text-decoration: ${styles.textDecoration || 'none'};
  vertical-align: ${styles.verticalAlign || 'middle'};
  display: ${styles.display || 'inline-block'};
  font-weight: ${styles.fontWeight || '400'};
  line-height: ${styles.lineHeight || '1.5'};
  color: ${styles.color || '#ffffff'};
  cursor: ${styles.cursor || 'pointer'};
  box-shadow: ${styles.boxShadow || '0 1px 6px 0 #20212447'};
  ${styles.height ? `height: ${styles.height};` : ''}
  ${styles.margin ? `margin: ${styles.margin};` : ''}

  @media (max-width: 800px) {
    font-size: ${styles.media800Style?.fontSize || '14px'};
  }

  @media (max-width: 750px) {
    font-size: ${styles.media750Style?.fontSize || '12px'};
  }

  @media (max-width: 400px) {
    font-size: ${styles.media400Style?.fontSize || '10px'};
  }

  @media (max-width: 400px) {
    font-size: ${styles.media300Style?.fontSize || '8px'};
  }
`;

type Media = {
  fontSize?: string | number;
};

export type ButtonStyle = {
  margin?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  borderRadius?: string;
  padding?: string;
  userSelect?: string;
  textAlign?: string;
  textDecoration?: string;
  verticalAlign?: string;
  display?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  cursor?: string;
  boxShadow?: string;
  media800Style?: Media | undefined;
  media750Style?: Media | undefined;
  media400Style?: Media | undefined;
  media300Style?: Media | undefined;
};

export type ButtonProps = {
  styles?: ButtonStyle | undefined;
  Class?: string;
  title: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
};

export type ButtonPropsExtended = {
  styles?: ButtonStyle;
  Class?: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export const Button = ({
  styles = {},
  buttonProps = {},
  Class = '',
  title,
}: ButtonProps) => {
  return (
    <>
      <button className={cx(ButtonStyles(styles), Class)} {...buttonProps}>
        {title}
      </button>
    </>
  );
};
