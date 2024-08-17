import React, { InputHTMLAttributes } from 'react';
import { css } from '@emotion/css';
import { SearchBar } from '../Bar';
import { ColumnList } from './ColumnList';
import { Pagination } from '../Pagination';
import type { PaginationProps } from '../Pagination';
import type { ButtonProps } from '../Button';
import type { GsSelectProps } from '../Input';
import type { ColumnListProps } from './ColumnList';

const defaultMainContainerStyle = css`
  transition: all 1s ease 0s;
  display: grid;
  transition: all 1s ease 0s;
  grid-template: 'main' 1fr / 1fr;
  box-sizing: border-box;
  height: 100%;
  background-color: rgb(247, 246, 244);
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
    display: grid
    transition: all 1s ease 0s;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-self: center;
    padding: 0px 1rem 8rem;
    width: 100%;
    max-width: calc(1272px + 2rem);
    grid-area: 2 / 1 / auto / auto;
    align-content: start;
    box-sizing: border-box;
    background: transparent;
    font-size: 100%;
    margin: 0;
    border: 0;
    vertical-align: top;
    border-spacing: 0;
    border-collapse: collapse;
`;

const defaultInfoContainerStyle = css`
  transition: all 1s ease 0s;
  display: inline-block;
  box-sizing: border-box;
  align-self: stretch;
  grid-area: 2 / 1 / span 1 / span 12;
  padding-top: 3rem;
  background: transparent;
  font-size: 100%;
  margin: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

const defaultBreakContainerStyle = css`
  transition: all 1s ease 0s;
  background: transparent;
  font-size: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  border-spacing: 0;
  border-collapse: collapse;
`;

type ReactNodeArray = React.ReactNode[][];

export interface ListProps {
  items: ReactNodeArray;
  headers: string[];
  columns: number;
  selectProps?: GsSelectProps;
  selectByProps?: GsSelectProps;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  propsPagination: PaginationProps;
  title?: string;
  actionButton?: ButtonProps;
  mainContainerStyle?: string;
  gridContainerStyle?: string;
  infoContainerStyle?: string;
  breakContainerStyle?: string;
  propsColumnList?: ColumnListProps;
}

export interface ListPropsExtended {
  items?: ReactNodeArray;
  headers?: string[];
  columns?: number;
  selectProps?: GsSelectProps;
  selectByProps?: GsSelectProps;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  propsPagination?: PaginationProps;
  title?: string;
  actionButton?: ButtonProps;
  mainContainerStyle?: string;
  gridContainerStyle?: string;
  infoContainerStyle?: string;
  breakContainerStyle?: string;
  propsColumnList?: ColumnListProps;
}

export const List: React.FC<ListProps> = ({
  items,
  headers,
  columns,
  selectProps,
  selectByProps,
  inputProps,
  propsPagination,
  title = '',
  actionButton,
  mainContainerStyle = defaultMainContainerStyle,
  gridContainerStyle = defaultGridContainerStyle,
  infoContainerStyle = defaultInfoContainerStyle,
  breakContainerStyle = defaultBreakContainerStyle,
  propsColumnList,
}) => {
  return (
    <div className={css(mainContainerStyle)}>
      <div className={css(gridContainerStyle)}>
        <div className={css(infoContainerStyle)}>
          <div className={css(breakContainerStyle)}>
            <SearchBar
              label={title}
              selectProps={selectProps}
              inputProps={{ ...inputProps }}
              selectByProps={selectByProps}
              actionButton={actionButton}
            />
            <ColumnList
              items={items}
              columns={columns}
              headers={headers}
              {...propsColumnList}
            />
            <Pagination {...propsPagination} />
          </div>
        </div>
      </div>
    </div>
  );
};
