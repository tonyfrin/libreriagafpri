import React from 'react';
import { css } from '@emotion/css';

const defaultMainContainerStyle = css`
  transition: all 1s ease 0s;
  display: table;
  border-collapse: separate;
  border-spacing: 0px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgb(227, 223, 218);
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  table-layout: fixed;
`;

const defaultHeaderContainerStyle = (columns: number) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: 16px;
`;

const defaultItemsContainerStyle = (columns: number) => css`
  transition: all 1s ease 0s;
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: 16px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const defaultItemStyle = css`
  transition: all 1s ease 0s;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  width: auto;
  padding: 1rem;
  vertical-align: middle;
  border-top: 1px solid rgb(227, 223, 218);
  line-height: 1.25rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 75%;
`;

const defaultHeaderStyle = css`
  transition: all 1s ease 0s;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-size: 0.875rem;
  color: rgb(38, 35, 33);
  display: table-cell;
  width: auto;
  padding: 1rem;
  vertical-align: middle;
  border-top: none;
`;

type ReactNodeArray = React.ReactNode[];

export interface ColumnListProps {
  items: ReactNodeArray[];
  columns: number;
  headers: string[];
  mainContainerStyle?: string;
  headerContainerStyle?: string;
  headerStyle?: string;
  itemsContainerStyle?: string;
  itemStyle?: string;
}

export const ColumnList: React.FC<ColumnListProps> = ({
  items,
  columns,
  headers,
  mainContainerStyle = defaultMainContainerStyle,
  headerContainerStyle = defaultHeaderContainerStyle(columns),
  headerStyle = defaultHeaderStyle,
  itemsContainerStyle = defaultItemsContainerStyle(columns),
  itemStyle = defaultItemStyle,
}) => {
  return (
    <div className={css(mainContainerStyle)}>
      <div className={css(headerContainerStyle)}>
        {headers.map((header, index) => (
          <div key={index} className={headerStyle}>
            {header}
          </div>
        ))}
      </div>
      <ul className={css(itemsContainerStyle)}>
        {items.map((row, rowIndex) =>
          row.map((item, columnIndex) => (
            <li key={`${rowIndex}-${columnIndex}`} className={itemStyle}>
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
