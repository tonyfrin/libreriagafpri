import React from 'react';
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import { ColHeaderTable, LineHeaderTable, LineProductBudgetCart } from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';

export type CartBudgetTableProps = {
  siteOptions: SiteOptions;
  useBudget: UseGafpriBudgetReturn;
};

export const CartBudgetTable = ({
  siteOptions,
  useBudget,
}: CartBudgetTableProps) => {
  return (
    <>
      <SimpleTable
        header={
          <LineHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Código" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Nombre" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Costo" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Cantidad" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Precio" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Total" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="-" />
            </ColHeaderTable>
          </LineHeaderTable>
        }
        body={
          <>
            <LineProductBudgetCart
              useBudget={useBudget}
              siteOptions={siteOptions}
            />
          </>
        }
      />
    </>
  );
};
