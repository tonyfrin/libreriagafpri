import React from 'react';
import { css, cx } from '@emotion/css';
import { Pagination, PaginationProps } from '../Pagination';
import { SingleTable } from '../Table';

type SingleListContainerStylesProps = {
  transition?: string;
  background?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  border?: string;
  verticalAlign?: string;
  borderSpacing?: string;
  borderCollapse?: string;
  custom?: string;
};

const singleListContainerStyle = (
  styles: SingleListContainerStylesProps
) => css`
  transition: ${styles.transition || 'all 1s ease 0s'};
  background: ${styles.background || 'transparent'};
  font-size: ${styles.fontSize || '100%'};
  margin: ${styles.margin || '0'};
  padding: ${styles.padding || '0'};
  border: ${styles.border || '0'};
  vertical-align: ${styles.verticalAlign || 'top'};
  border-spacing: ${styles.borderSpacing || '0'};
  border-collapse: ${styles.borderCollapse || 'collapse'};
  ${styles.custom}
`;

type ReactNodeArray = React.ReactNode[][];

export interface SingleListProps {
  items: ReactNodeArray;
  headers: string[];
  propsPagination: PaginationProps;
  containerStyle?: SingleListContainerStylesProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const SingleList: React.FC<SingleListProps> = ({
  items,
  headers,
  propsPagination,
  containerStyle = {},
  containerProps = {},
}) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  return (
    <div
      className={css(
        singleListContainerStyle(containerStyle),
        containerClassName
      )}
      {...restContainerProps}
    >
      <SingleTable headers={headers} data={items} />
      <Pagination {...propsPagination} />
    </div>
  );
};
