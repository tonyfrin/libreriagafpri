import React from 'react';
import { SiteOptions } from '../../states';
import {
  ColHeaderTable,
  LineHeaderTable,
  LineProductOrderViewCart,
} from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';
import { OrderAttributes } from '../states';

export type CartOrderViewTableProps = {
  siteOptions: SiteOptions;
  order: OrderAttributes;
};

export const CartOrderViewTable = ({
  siteOptions,
  order,
}: CartOrderViewTableProps) => {
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
            <LineProductOrderViewCart order={order} siteOptions={siteOptions} />
          </>
        }
      />
    </>
  );
};
