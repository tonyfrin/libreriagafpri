import React, { InputHTMLAttributes } from 'react';
import { css } from '@emotion/css';
import { Button } from '../Button';
import { GsSelect } from '../Input';
import type { GsSelectProps } from '../Input';
import type { ButtonProps } from '../Button';

const defaultMainContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultInfoContainerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
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

const defaultTitleContainerStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: rgb(38, 35, 33);
  line-height: 1.5;
  padding: 1rem 0px;
  background: transparent;
  margin: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultBreakContainerStyle = css`
  margin: 0px 1rem;
  border-left: 2px solid rgb(178, 171, 165);
  height: 1.5rem;
  background: transparent;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

const defaultBreakStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
  flex-shrink: 0;
`;

const defaultInputMainContainerStyle = css`
  width: 50%;
  max-width: 50%;
  margin-right: 0px;
  margin-left: auto;
  background: transparent;
  font-size: 100%;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  display: flex;
  justify-content: space-around;
`;

const defaultHiddenInputContainerStyle = css`
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  margin: auto;
`;

const defaultInputMiddleContainerStyle = css`
  background: transparent;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border-color: rgb(178, 171, 165);
  border-width: 2px;
  border-style: solid;
  cursor: text;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  vertical-align: top;
`;

const defaultInputContainerStyle = css`
  position: relative;
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
  margin: 0px;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  background: transparent;
`;

const defaultInputStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: rgb(114, 108, 102);
  line-height: 1.25rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  box-shadow: none;
  background-color: transparent;
  margin: 0px;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
`;

export interface SearchBarProps {
  label: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  selectProps?: Omit<GsSelectProps, 'options'> & {
    options?: { value: string; label: string }[];
  };
  selectByProps?: Omit<GsSelectProps, 'options'> & {
    options?: { value: string; label: string }[];
  };
  actionButton?: ButtonProps;
  mainContainerStyle?: string;
  infoContainerStyle?: string;
  titleContainerStyle?: string;
  breakContainerStyle?: string;
  breakStyle?: string;
  inputMainContainerStyle?: string;
  hiddenInputContainerStyle?: string;
  inputMiddleContainerStyle?: string;
  inputContainerStyle?: string;
  inputStyle?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  label,
  inputProps,
  selectProps,
  selectByProps,
  actionButton,
  mainContainerStyle = defaultMainContainerStyle,
  infoContainerStyle = defaultInfoContainerStyle,
  titleContainerStyle = defaultTitleContainerStyle,
  breakContainerStyle = defaultBreakContainerStyle,
  breakStyle = defaultBreakStyle,
  inputMainContainerStyle = defaultInputMainContainerStyle,
  hiddenInputContainerStyle = defaultHiddenInputContainerStyle,
  inputMiddleContainerStyle = defaultInputMiddleContainerStyle,
  inputContainerStyle = defaultInputContainerStyle,
  inputStyle = defaultInputStyle,
}) => {
  return (
    <div className={css(mainContainerStyle)}>
      <div className={css(infoContainerStyle)}>
        <div className={css(titleContainerStyle)}>{label}</div>
        <div className={css(breakContainerStyle)}></div>
        {actionButton && <Button {...actionButton} />}
        {selectProps && (
          <>
            <span className={css(breakStyle)}>Ordenar por</span>
            <GsSelect
              {...selectProps}
              options={selectProps?.options ?? []}
              containerStyles={{ width: '50%' }}
            />
          </>
        )}
        <div className={css(inputMainContainerStyle)}>
          {selectByProps && (
            <GsSelect
              {...selectByProps}
              options={selectByProps?.options ?? []}
              containerStyles={{ width: '50%' }}
            />
          )}
          {inputProps?.placeholder && (
            <div className={css(hiddenInputContainerStyle)}>
              <div className={css(inputMiddleContainerStyle)}>
                <div className={css(inputContainerStyle)}>
                  <input className={css(inputStyle)} {...inputProps} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
