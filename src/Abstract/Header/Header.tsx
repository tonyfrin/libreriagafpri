import React from 'react';
import { css } from '@emotion/css';
import { ButtonLarge } from '../Button';
import { MenuButton, Menu2 } from '../Menu';
import type { ButtonLargeProps } from '../Button';
import type { Menu2Props, MenuButtonProps } from '../Menu';

const defaultMainContainerStyle = css`
  transition: all 1s ease 0s;
  display: grid;
  grid-template: 'main' 1fr / 1fr;
  box-sizing: border-box;
  height: auto;
  background-color: rgb(255, 255, 255);
  padding-bottom: 1rem;
  border: 0 none;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultGridContainerStyle = css`
  transition: all 1s ease 0s;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-self: center;
  padding: 1rem;
  width: 100%;
  max-width: calc(792px + 2rem);
  align-content: start;
  box-sizing: border-box;
`;

const defaultHeadContainerStyle = css`
  transition: all 1s ease 0s;
  display: inline-block;
  box-sizing: border-box;
  align-self: stretch;
  grid-area: 1 / 1 / span 1 / span 12;
  background: transparent;
  border: 0 none;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultTitleContainerStyle = css`
  transition: all 1s ease 0s;
  display: flex;
  align-items: center;
  margin: 2rem 0px;
  min-height: 3rem;
  background: transparent;
  border: 0 none;
  font-size: 100%;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultTitleStyle = css`
  transition: all 1s ease 0s;
  font-weight: 800;
  font-size: 1.75rem;
  color: rgb(38, 35, 33);
  line-height: 2.5rem;
`;

const defaultHiddenContainerStyle = css`
  transition: all 1s ease 0s;
`;

export interface HeaderPropsExtended {
  menuTitleProps?: Menu2Props;
  menuButtonProps?: MenuButtonProps;
  buttonLargeProps?: ButtonLargeProps;

  mainContainerStyle?: string;
  gridContainerStyle?: string;
  headContainerStyle?: string;
  titleContainerStyle?: string;
  hiddenContainerStyle?: string;
  titleStyle?: string;
}

export interface HeaderProps {
  title: string;
  menuTitleProps?: Menu2Props;
  menuButtonProps?: MenuButtonProps;
  buttonLargeProps?: ButtonLargeProps;

  mainContainerStyle?: string;
  gridContainerStyle?: string;
  headContainerStyle?: string;
  titleContainerStyle?: string;
  hiddenContainerStyle?: string;
  titleStyle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  menuTitleProps,
  menuButtonProps,
  buttonLargeProps,
  mainContainerStyle = defaultMainContainerStyle,
  gridContainerStyle = defaultGridContainerStyle,
  headContainerStyle = defaultHeadContainerStyle,
  titleContainerStyle = defaultTitleContainerStyle,
  hiddenContainerStyle = defaultHiddenContainerStyle,
  titleStyle = defaultTitleStyle,
}) => {
  return (
    <>
      <div className={css(mainContainerStyle)}>
        <div className={css(gridContainerStyle)}>
          <div className={css(headContainerStyle)}>
            <div
              className={css(titleContainerStyle, {
                justifyContent: menuTitleProps?.items ? '' : 'center',
              })}
            >
              <div
                className={css(hiddenContainerStyle, {
                  flex: menuTitleProps?.items ? '1 1 0%' : 'none',
                })}
              ></div>
              <span className={css(titleStyle)}>{title}</span>
              {menuTitleProps?.items && <Menu2 {...menuTitleProps} />}
            </div>
            {menuButtonProps?.items && <MenuButton {...menuButtonProps} />}
            {buttonLargeProps && <ButtonLarge {...buttonLargeProps} />}
          </div>
        </div>
      </div>
    </>
  );
};
