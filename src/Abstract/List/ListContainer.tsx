import React from 'react';
import { css, cx } from '@emotion/css';
import { List, ListProps } from './List';

export type DivListListContainerStyle = {
  borderTop?: string;
  paddingTop?: string;
  width?: string;
  marginTop?: string;
  customStyles?: string;
};

const divListContainerStyleDefault = (styles: DivListListContainerStyle) => css`
  border-top: ${styles?.borderTop || '0.1rem solid rgb(227, 223, 218'};
  padding-top: ${styles?.paddingTop || '10px'};
  width: ${styles?.paddingTop || '96%'};
  margin-top: ${styles?.paddingTop || '5px'};
  ${styles?.customStyles || ''}
`;

export type ListContainerProps = {
  divStiles?: DivListListContainerStyle;
  propsList: ListProps;
};

export const ListContainer = ({
  divStiles = {},
  propsList,
}: ListContainerProps) => {
  return (
    <>
      <div className={cx(divListContainerStyleDefault(divStiles))}>
        <List {...propsList} />
      </div>
    </>
  );
};
