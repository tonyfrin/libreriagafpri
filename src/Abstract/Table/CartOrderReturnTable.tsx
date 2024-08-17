import React from 'react';
import { SiteOptions, UseGafpriOrderReturnReturn } from '../../states';
import { ColHeaderTable, LineHeaderTable, LineProductReturnCart } from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';

export type CartOrderReturnTableProps = {
  siteOptions: SiteOptions;
  useOrderReturn: UseGafpriOrderReturnReturn;
};

export const CartOrderReturnTable = ({
  siteOptions,
  useOrderReturn,
}: CartOrderReturnTableProps) => {
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
            <LineProductReturnCart
              useOrderReturn={useOrderReturn}
              siteOptions={siteOptions}
            />
          </>
        }
      />
    </>
  );
};
