import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';

const defaultMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
  padding: 2em 0px;
`;

const defaultTextStyle = css`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  color: rgb(38, 35, 33);
  line-height: 1.25rem;
  flex-shrink: 0;
  margin: auto 0px;
`;

const defaultInactiveButtonStyle = {
  backgroundColor: '#CCCCCC',
  cursor: 'not-allowed',
};

const defaultButtonStyle = {
  padding: '0.4em 0.6em 0.2em 0.6em',
  borderRadius: '100%',
};

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  totalPages: number;
  mainContainerStyle?: string;
  buttonStyle?: ButtonProps['styles'];
  inactiveButtonStyle?: ButtonProps['styles'];
  textStyle?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
  mainContainerStyle = defaultMainContainerStyle,
  buttonStyle = defaultButtonStyle,
  inactiveButtonStyle = defaultInactiveButtonStyle,
  textStyle = defaultTextStyle,
}) => {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className={css(mainContainerStyle)}>
      <Button
        title={<FaArrowLeft />}
        styles={{
          ...buttonStyle,
          ...(hasPreviousPage ? {} : inactiveButtonStyle),
        }}
        buttonProps={{
          onClick: () => {
            if (hasPreviousPage) {
              setCurrentPage(currentPage - 1);
            }
          },
          disabled: !hasPreviousPage,
        }}
      />

      <span className={css(textStyle)}>
        Página {currentPage} de {totalPages}
      </span>

      <Button
        title={<FaArrowRight />}
        styles={{
          ...buttonStyle,
          ...(hasNextPage ? {} : inactiveButtonStyle),
        }}
        buttonProps={{
          onClick: () => {
            if (hasNextPage) {
              setCurrentPage(currentPage + 1);
            }
          },
          disabled: !hasNextPage,
        }}
      />
    </div>
  );
};
