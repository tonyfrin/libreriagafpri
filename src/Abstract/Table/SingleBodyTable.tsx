import React from 'react';
import styled from '@emotion/styled';
import { css, cx } from '@emotion/css';

type ReactNodeArray = React.ReactNode[][];

type SingleTableContainerProps = {
  width?: string;
  minHeight?: string;
  overflow?: string;
  custom?: string;
};

export interface SingleBodyTableProps {
  data: ReactNodeArray;
  containerStyles?: SingleTableContainerProps;
}

const singleTableContainer = (style: SingleTableContainerProps) => css`
  width: ${style.width || '100%'};
  min-height: ${style.minHeight || '150px'};
  overflow: ${style.overflow || 'auto'};
  ${style.custom || ''}
`;

const TableContainer = styled.table`
  width: 100%;
  overflow: auto;
  border-collapse: collapse;
  font-size: 10px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const SingleBodyTable: React.FC<SingleBodyTableProps> = ({
  data,
  containerStyles = {},
}) => {
  return (
    <div className={cx(singleTableContainer(containerStyles))}>
      <TableContainer>
        {data.map((rowData, rowIndex) => (
          <TableRow key={rowIndex}>
            {rowData.map((cellData) => cellData)}
          </TableRow>
        ))}
      </TableContainer>
    </div>
  );
};
