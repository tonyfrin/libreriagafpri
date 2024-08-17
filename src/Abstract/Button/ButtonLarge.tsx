import React from 'react';
import { css } from '@emotion/css';
import { IconType } from 'react-icons';

const defaultMainContainerStyle = css`
  padding: 0px;
  display: inline-block;
  box-sizing: border-box;
  align-self: stretch;
  grid-area: 3 / 1 / span 1 / span 12;
  margin-top: 1rem;
  background: transparent;
  font-size: 100%;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

const defaultInfoContainerStyle = css`
  background-color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px 1px,
    rgba(0, 0, 0, 0.06) 1px 1px 2px 1px;
  padding: 0.75rem;
  box-sizing: border-box;
  height: 100%;
  background: transparent;
  font-size: 100%;
  margin: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultGridContainerStyle = css`
  box-sizing: border-box;
  position: relative;
  display: flex;
  transition: all 200ms ease 0s;
  min-height: 3.75rem;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  font-size: 100%;
  margin: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultIconContainerStyle = css`
  min-width: 2rem;
  align-self: center;
  height: 100%;
  text-align: center;
  flex: 0 0 auto;
  background: transparent;
  font-size: 100%;
  margin-right: 5px;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultIconStyle = css`
  font-size: 1.5rem;
  vertical-align: middle;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  color: rgb(50, 79, 165);
`;

const defaultTextContainerStyle = css`
  flex-grow: 1;
  align-self: center;
  margin-left: 0.5rem;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultTitleStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
`;

const defaultDescriptionStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
`;

const defaultButtonContainerStyle = css`
  align-self: center;
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
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
  min-width: 130px;
  max-width: 396px;
  min-height: 3rem;
  line-height: 20px;
  height: auto;
  width: auto;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: rgb(124, 161, 230);
  border-style: solid;
  background-color: rgb(255, 255, 255);
  background-image: none;
  color: rgb(50, 79, 165);
  transition: all 0.2s ease 0s;
  display: inline-block;
  margin: 0.25rem;
  text-transform: none;
  padding: 0px 1rem;
  cursor: pointer;
  &:hover {
    background-color: #06b0e433;
  }
`;

const defaultButtonTitleStyle = css`
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
`;

export interface ButtonLargeProps {
  label: string;
  description: string;
  onClick: () => void;
  Icon: IconType;
  titleButton: string;
  mainContainerStyle?: string;
  infoContainerStyle?: string;
  gridContainerStyle?: string;
  iconContainerStyle?: string;
  iconStyle?: string;
  textContainerStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
  buttonContainerStyle?: string;
  buttonStyle?: string;
  buttonTitleStyle?: string;
}

export const ButtonLarge: React.FC<ButtonLargeProps> = ({
  label,
  onClick,
  Icon,
  description,
  titleButton,
  mainContainerStyle = defaultMainContainerStyle,
  infoContainerStyle = defaultInfoContainerStyle,
  gridContainerStyle = defaultGridContainerStyle,
  iconContainerStyle = defaultIconContainerStyle,
  iconStyle = defaultIconStyle,
  textContainerStyle = defaultTextContainerStyle,
  titleStyle = defaultTitleStyle,
  descriptionStyle = defaultDescriptionStyle,
  buttonContainerStyle = defaultButtonContainerStyle,
  buttonStyle = defaultButtonStyle,
  buttonTitleStyle = defaultButtonTitleStyle,
}) => {
  return (
    <>
      <div className={css(mainContainerStyle)}>
        <div className={css(infoContainerStyle)}>
          <div className={css(gridContainerStyle)}>
            <div className={css(iconContainerStyle)}>
              <span className={css(iconStyle)}>
                <Icon />
              </span>
            </div>
            <div className={css(textContainerStyle)}>
              <div className={css(titleStyle)}>{label}</div>
              <div className={css(descriptionStyle)}>{description}</div>
            </div>
            <div className={css(buttonContainerStyle)}>
              <button className={css(buttonStyle)} onClick={onClick}>
                <div className={css(buttonTitleStyle)}>{titleButton}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
