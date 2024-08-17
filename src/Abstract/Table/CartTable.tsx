import React from 'react';
import { SiteOptions, UseGafpriOrderReturn } from '../../states';
import { ColHeaderTable, LineHeaderTable, LineProductCart } from '../Li';
import { SpanValue } from '../Span';
import { SimpleTable } from './SimpleTable';

export type CartListProps = {
  siteOptions: SiteOptions;
  useOrder: UseGafpriOrderReturn;
};

export const CartTable = ({ siteOptions, useOrder }: CartListProps) => {
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
            <LineProductCart useOrder={useOrder} siteOptions={siteOptions} />
          </>
        }
      />
    </>
  );
};
