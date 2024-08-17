import React from 'react';
import { css, cx } from '@emotion/css';

const floatingButtonsItemStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const floatingButtonsContainerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const floatingButtonsButtonStyles = css`
  margin-right: 8px;
  padding: 8px;
  color: #8d8d8d;
  border-radius: 4px;
  border: 1px solid #dfdbdb;
`;

const floatingCloseButtonStyles = css`
  position: absolute;
  top: 0px;
  transform: translateY(-50%);
  right: 0px;
  cursor: pointer;
  color: #fff;
  background-color: #f44336;
  border-radius: 100%;
  padding: 2px 5px 4px 5px;
  font-size: 8px;
`;

const floatingButtonsStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 10px;
  padding: 15px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 91%;
`;

export type FloatingButtonsProps = {
  items: string[];
  remove: (label: string) => void;
};

export const FloatingButtons = ({
  items,
  remove,
}: FloatingButtonsProps): JSX.Element => {
  return (
    <div className={cx(floatingButtonsStyles)}>
      {items.map((label) => {
        return (
          <div key={label} className={cx(floatingButtonsItemStyles)}>
            <div className={cx(floatingButtonsContainerStyles)}>
              <span
                className={cx(floatingCloseButtonStyles)}
                onClick={() => remove(label)}
              >
                x
              </span>
              <button className={cx(floatingButtonsButtonStyles)}>
                {label}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
