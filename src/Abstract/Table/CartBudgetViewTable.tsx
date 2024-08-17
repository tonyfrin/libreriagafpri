import React from 'react';
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import {
  ColHeaderTable,
  LineHeaderTable,
  LineProductBudgetViewCart,
} from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';
import { BudgetAttributes } from '../states';

export type CartBudgetViewTableProps = {
  siteOptions: SiteOptions;
  budget: BudgetAttributes;
};

export const CartBudgetViewTable = ({
  siteOptions,
  budget,
}: CartBudgetViewTableProps) => {
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
              <SpanValue value="Cantidad" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Precio" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Total" />
            </ColHeaderTable>
          </LineHeaderTable>
        }
        body={
          <>
            <LineProductBudgetViewCart
              budget={budget}
              siteOptions={siteOptions}
            />
          </>
        }
      />
    </>
  );
};
