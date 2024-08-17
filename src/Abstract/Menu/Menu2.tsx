import React from 'react';
import { css } from '@emotion/css';
import { IconType } from 'react-icons';

const defaultMainContainerStyle = css`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
`;

const defaultItemContainerStyle = css`
  margin-left: 1rem;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultButtonStyle = css`
  font-family: 'Poppins', sans-serif;
  font-size: inherit;
  font-weight: inherit;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
  min-width: 0px;
  max-width: 396px;
  min-height: 0px;
  line-height: 20px;
  height: auto;
  width: auto;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.5rem;
  border-width: 0px;
  border-color: transparent;
  border-style: solid;
  background-color: transparent;
  background-image: none;
  color: rgb(50, 79, 165);
  transition: all 0.2s ease 0s;
  display: inline;
  margin: 0px 0px 0px 10px;
  text-transform: none;
  padding: 0px;
  box-shadow: none;
  cursor: pointer;
`;

const defaultButtonContentContainerStyle = css`
  display: flex;
  align-items: baseline;
  justify-content: center;
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

const defaultIconStyle = css`
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  padding-right: 0.2rem;
  height: 20px;
  width: 20px;
  line-height: 0.9;
  align-items: center;
  justify-content: center;
  align-self: end;
  order: 0;
`;

const defaultTextStyle = css``;

export interface MenuItem {
  id: string;
  label: string;
  onClick: () => void;
  icon: IconType;
}

export interface Menu2Props {
  items: MenuItem[];
  mainContainerStyle?: string;
  itemContainerStyle?: string;
  buttonStyle?: string;
  buttonContentContainerStyle?: string;
  iconStyle?: string;
  textStyle?: string;
}

export const Menu2: React.FC<Menu2Props> = ({
  items,
  mainContainerStyle = defaultMainContainerStyle,
  itemContainerStyle = defaultItemContainerStyle,
  buttonStyle = defaultButtonStyle,
  buttonContentContainerStyle = defaultButtonContentContainerStyle,
  iconStyle = defaultIconStyle,
  textStyle = defaultTextStyle,
}) => {
  return (
    <>
      <div className={css(mainContainerStyle)}>
        {items.map((item) => (
          <div key={item.id} className={css(itemContainerStyle)}>
            <button className={css(buttonStyle)} onClick={item.onClick}>
              <div className={css(buttonContentContainerStyle)}>
                <span className={css(iconStyle)}>
                  <item.icon />
                </span>
                <span className={css(textStyle)}>{item.label}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
