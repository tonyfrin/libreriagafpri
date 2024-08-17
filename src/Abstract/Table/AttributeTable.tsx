import React from 'react';
import styled from '@emotion/styled';
import { GeneralAttribute } from '../../Validations';

export interface AttributeTableProps {
  data: GeneralAttribute[];
  onRemove: (name: string) => void;
}

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 100px;
  margin-left: 38px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableCellActions = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  display: flex;
  justify-content: center;
`;

const RemoveButton = styled.button`
  background-color: #c12429;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export const AttributeTable: React.FC<AttributeTableProps> = ({
  data,
  onRemove,
}) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHeader>Nombre</TableHeader>
          <TableHeader>Valor</TableHeader>
          <TableHeader>Acciones</TableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((attribute, index) => (
          <TableRow key={index}>
            <TableCell>{attribute.name}</TableCell>
            <TableCell>{attribute.value}</TableCell>
            <TableCellActions>
              <RemoveButton onClick={() => onRemove(attribute.name)}>
                X
              </RemoveButton>
            </TableCellActions>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};
