import React from 'react';
import { css } from '@emotion/css';

const defaultMainContainerStyle = (isOpen: boolean) => css`
  margin-left: ${isOpen ? '250px' : '50px'};
  transition: margin-left 0.3s ease;
  margin-top: 59px;
`;

export interface MainContentProps {
  isOpen: boolean;
  children: JSX.Element;
  mainContainerStyle?: string;
}

export const MainContent: React.FC<MainContentProps> = ({
  isOpen,
  children,
  mainContainerStyle = defaultMainContainerStyle(isOpen),
}) => {
  return <div className={css(mainContainerStyle)}>{children}</div>;
};
