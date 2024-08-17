import React from 'react';
import { css, cx } from '@emotion/css';

type style = {
  image: string;
  children: JSX.Element;
  customStyles?: string;
};

const Background1Styles = (image: string, customStyles: string) => css`
  background-image: url(${image});
  background-size: 190vh;
  background-repeat: no-repeat;
  min-height: 100vh;
  ${customStyles}
`;

export const Background1 = ({ children, image, customStyles = '' }: style) => {
  return (
    <div className={cx(Background1Styles(image, customStyles))}>{children}</div>
  );
};
