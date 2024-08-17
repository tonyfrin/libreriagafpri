import React, { FC } from 'react';
import { css } from '@emotion/css';

export interface ErrorProps {
  error: string[] | null;
  mainContainerStyle?: string;
  textStyle?: string;
}

const defaultMainContainerStyle = css`
  width: 70%;
  margin: auto;
`;

const defaultTextStyle = css`
  background-color: #c12429;
  border-radius: 20px;
  text-align: center;
  padding: 5px;
  color: white;
  font-weight: 400;
  margin: 1px;
`;

export const Error: FC<ErrorProps> = ({
  error,
  mainContainerStyle = defaultMainContainerStyle,
  textStyle = defaultTextStyle,
}) => (
  <>
    {error && (
      <div className={css(mainContainerStyle)}>
        {error.map((item, index) => (
          <p className={css(textStyle)} key={`error-${index}`}>
            {item}
          </p>
        ))}
      </div>
    )}
  </>
);
