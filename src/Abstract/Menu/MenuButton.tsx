import React from 'react';
import { css } from '@emotion/css';
import { IconType } from 'react-icons';

const defaultMainContainerStyle = css`
  display: flex;
  box-sizing: border-box;
  align-self: stretch;
  grid-area: 2 / 1 / span 1 / span 12;
  justify-content: space-between;
  gap: 1rem;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultItemContainerStyle = css`
  box-sizing: border-box;
  position: relative;
  transition: all 200ms ease 0s;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: rgb(227, 223, 218);
  border-style: solid;
  padding: 1rem;
  margin: 0px;
  flex: 1 1 0%;
  background: transparent;
  font-size: 100%;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  &:hover {
    background-color: #06b0e433;
    color: #ffff;
  }
`;

const defaultIconGeneralContainerStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  color: rgb(50, 79, 165);
  text-transform: uppercase;
  background-color: rgb(232, 239, 250);
  overflow: hidden;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border-radius: 70% 52% 72%;
  font-size: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0.5rem;
  padding: 0;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultIconContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultIconStyle = css`
  vertical-align: middle;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
`;

const defaultTitleContainer = css`
  vertical-align: middle;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: block;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultTitleStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
`;

export interface MenuItem {
  id: string;
  label: string;
  onClick: () => void;
  icon: IconType;
}

export interface MenuButtonProps {
  items: MenuItem[];
  mainContainerStyle?: string;
  itemContainerStyle?: string;
  iconGeneralContainerStyle?: string;
  iconContainerStyle?: string;
  iconStyle?: string;
  titleContainer?: string;
  titleStyle?: string;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  items,
  mainContainerStyle = defaultMainContainerStyle,
  itemContainerStyle = defaultItemContainerStyle,
  iconGeneralContainerStyle = defaultIconGeneralContainerStyle,
  iconContainerStyle = defaultIconContainerStyle,
  iconStyle = defaultIconStyle,
  titleContainer = defaultTitleContainer,
  titleStyle = defaultTitleStyle,
}) => {
  return (
    <>
      <div className={css(mainContainerStyle)}>
        {items.map((item) => (
          <div
            key={item.id}
            className={css(itemContainerStyle)}
            onClick={item.onClick}
          >
            <div className={css(iconGeneralContainerStyle)}>
              <div className={css(iconContainerStyle)}>
                <span className={css(iconStyle)}>
                  <item.icon />
                </span>
              </div>
            </div>
            <div className={css(titleContainer)}>
              <div className={css(titleStyle)}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
