import React from 'react';
import { css } from '@emotion/css';
import { IconType } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

const defaultMainContainerStyle = css`
  position: fixed;
  left: 0px;
  height: 100vh;
  top: 60px;
  max-width: 31.25rem;
  z-index: 10;
  transition: all 0.5s ease 0s;
  background: linear-gradient(to bottom, #324375, #30679e);
  overflow-y: auto;
`;

const defaultListContainerStyle = css`
  padding: 0.5rem;
  margin-top: 40px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
`;

const defaultItemContainerStyle = css`
  font-weight: 700;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
  min-width: 2.5rem;
  max-width: 396px;
  min-height: 2.5rem;
  line-height: 20px;
  height: 2.5rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.5rem;
  border-width: 0px;
  border-color: rgb(140, 191, 204);
  border-style: solid;
  background-image: none;
  color: rgb(186, 209, 245);
  display: inline-flex;
  margin: 0.25rem 0px;
  text-transform: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(32, 51, 125);
    color: #ffff;
  }
`;

const defaultTextStyle = css`
  margin: 0px 0px 0px 5px;
  transition: all 0.5s ease 0s;
  flexgrow: 1;
  flexshrink: 1;
  order: 0;
`;

const defaultHamburgerButtonStyle = css`
  position: absolute;
  top: 10px;
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 24px;
  color: rgb(186, 209, 245);
  padding: 5px 5px 0px 5px;
  &:hover {
    background-color: rgb(32, 51, 125);
    color: #ffff;
  }
`;

const defaultIconStyle = css`
  flexgrow: 0;
  flexshrink: 0;
  marginright: '8px';
  order: 1;
`;

interface MenuItem {
  id: string;
  label: string;
  onClick: () => void;
  icon: IconType;
}

export interface Menu1Props {
  items: MenuItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  mainContainerStyle?: string;
  listContainerStyle?: string;
  itemContainerStyle?: string;
  iconStyle?: string;
  textStyle?: string;
  hamburgerButtonStyle?: string;
}

export const Menu1: React.FC<Menu1Props> = ({
  items,
  isOpen,
  setIsOpen,
  mainContainerStyle = defaultMainContainerStyle,
  listContainerStyle = defaultListContainerStyle,
  itemContainerStyle = defaultItemContainerStyle,
  iconStyle = defaultIconStyle,
  textStyle = defaultTextStyle,
  hamburgerButtonStyle = defaultHamburgerButtonStyle,
}) => {
  return (
    <div
      className={css(mainContainerStyle, { width: isOpen ? '250px' : '50px' })}
    >
      {isOpen ? (
        <ul className={css(listContainerStyle)}>
          {items.map((item) => (
            <li
              key={item.id}
              className={css(itemContainerStyle)}
              onClick={item.onClick}
            >
              <span className={css(iconStyle, { order: 0 })}>
                <item.icon />
              </span>
              <span
                className={css(textStyle, {
                  order: 1,
                  opacity: isOpen ? 1 : 0,
                })}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={css(listContainerStyle)}>
          {items.map((item) => (
            <li
              key={item.id}
              className={css(itemContainerStyle, {
                justifyContent: 'center',
                paddingLeft: 0,
              })}
              onClick={item.onClick}
            >
              <item.icon />
            </li>
          ))}
        </ul>
      )}
      <button
        className={css(hamburgerButtonStyle, {
          right: isOpen ? '10px' : '5px',
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
};
