import React from 'react';
import { cx, css } from '@emotion/css';
import { LogoContainer } from '../../Abstract/Logo';
import type { LogoProps } from '../../Abstract/Logo/LogoContainer';

type style = {
  headerClass?: string;
};

type LoginHeaderProps = LogoProps & style;

type HeaderStyle = {
  background?: string;
  width?: string;
  position?: string;
  zIndex?: string;
  height?: string;
  top?: string;
};

const headerStyles = (styles: HeaderStyle): string => css`
  background: ${styles.background ||
  'linear-gradient(to left, #324375, #07b2e7)'};
  width: ${styles.width || '100%'};
  ${styles.position && `position: ${styles.position};`}
  ${styles.zIndex && `z-index: ${styles.zIndex};`}
  ${styles.height && `height: ${styles.height};`}
  ${styles.top && `top: ${styles.top};`}
`;

type HeaderLogin = {
  props: LoginHeaderProps;
  styles?: HeaderStyle;
};

export const LoginHeader = ({
  props,
  styles = {},
}: HeaderLogin): JSX.Element => {
  const { image, headerClass = '', ...imgProps }: LoginHeaderProps = props;
  return (
    <header className={cx(headerStyles(styles), headerClass)}>
      <LogoContainer image={image} {...imgProps} />
    </header>
  );
};
