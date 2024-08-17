import React from 'react';
import { css, cx } from '@emotion/css';

export type LineTableStylesContainerProps = {
  custom?: string;
};

const lineTableStylesContainer = (styles: LineTableStylesContainerProps) => css`
  ${styles.custom || ''}
`;

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  // Puedes agregar propiedades específicas de tu componente si es necesario
  key?: string;
}

export type LineTableProps = {
  containerProps?: TableRowProps;
  containerStyles?: LineTableStylesContainerProps;
  children: React.ReactNode;
};

export const LineTable = ({
  containerProps = {},
  containerStyles = {},
  children,
}: LineTableProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  return (
    <tr
      className={cx(lineTableStylesContainer(containerStyles))}
      {...restContainerProps}
    >
      {children}
    </tr>
  );
};
