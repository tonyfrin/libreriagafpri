import React from 'react';
import { css, cx } from '@emotion/css';
import { CreditHeaderLine } from '../Li';

type Items = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
};

export type CreditPendingTableProps = {
  items: Items[];
};

export const CreditPendingTable = ({
  items,
}: CreditPendingTableProps): JSX.Element => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <CreditHeaderLine
            col1={item.col1}
            col2={item.col2}
            col3={item.col3}
            col4={item.col4}
          />
        </div>
      ))}
    </div>
  );
};
