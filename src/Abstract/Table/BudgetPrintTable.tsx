import React from 'react';
import { SiteOptions, UseGafpriBudgetReturn } from '../../states';
import { ColHeaderTable, LineHeaderTable, LineBudgetPrint } from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';

export type BudgetPrintTableProps = {
  siteOptions: SiteOptions;
  useBudget: UseGafpriBudgetReturn;
};

export const BudgetPrintTable = ({
  siteOptions,
  useBudget,
}: BudgetPrintTableProps) => {
  return (
    <>
      <SimpleTable
        header={
          <LineHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Presupuesto #" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Fecha" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Cliente" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Monto" />
            </ColHeaderTable>
            <ColHeaderTable>
              <SpanValue value="Acciones" />
            </ColHeaderTable>
          </LineHeaderTable>
        }
        body={
          <>
            <LineBudgetPrint useBudget={useBudget} siteOptions={siteOptions} />
          </>
        }
      />
    </>
  );
};
