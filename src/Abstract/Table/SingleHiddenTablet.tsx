import React from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';

type ReactNodeArray = React.ReactNode[][];

export interface SingleHiddenTabletProps {
  headers: string[];
  data: ReactNodeArray;
}

const singleTableContainer = () => css`
  width: 100%;
  min-height: 150px;
  overflow: auto;
`;

const TableContainer = styled.table`
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
  font-size: 10px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const TableRow = styled.tr``;

export const SingleHiddenTablet: React.FC<SingleHiddenTabletProps> = ({
  headers,
  data,
}) => {
  return (
    <div className={cx(singleTableContainer())}>
      <TableContainer>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <TableRow key={rowIndex}>
              {rowData.map((cellData) => cellData)}
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
    </div>
  );
};
