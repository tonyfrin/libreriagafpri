import React from 'react';
import { css, cx } from '@emotion/css';
import { SearchBox } from '../Box';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import { Input } from '../Input';
import type { UseGafpriOrderReturnReturn } from '../../states';
import { Error } from '../Error';

type OrderReturnInitFormStaylesContainerProps = {
  color?: string;
  fontSize?: string;
  paddingBottom?: string;
  custom?: string;
};

const orderReturnInitFormStaylesContainer = (
  styles: OrderReturnInitFormStaylesContainerProps
) => css`
  color: ${styles.color || '#616e7d'};
  font-size: ${styles.fontSize || '12px'};
  padding-bottom: ${styles.paddingBottom || '40px'};
  ${styles.custom || ''}
`;

export type OrderReturnInitFormProps = {
  containerStyles?: OrderReturnInitFormStaylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  use: UseGafpriOrderReturnReturn;
  returnModule: () => void;
};

export const OrderReturnInitForm = ({
  containerStyles = {},
  containerProps = {},
  use,
  returnModule,
}: OrderReturnInitFormProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      use.pages.actions.goSales();
    }
  };

  return (
    <>
      <div
        className={cx(
          orderReturnInitFormStaylesContainer(containerStyles),
          containerClassName
        )}
        {...restContainerProps}
      >
        <Error error={use.error.states.error} />
        <SearchBox
          title1Props={{
            title: 'Modulo de devolución de pedidos',
          }}
          title2Props={{
            title: '',
          }}
        >
          <>
            <ContainerButton
              styles={{
                width: '100%',
              }}
            >
              <Input
                styles={{
                  width: '100%',
                }}
                inputProps={{
                  title: 'Cargar Pedido',
                  placeholder: 'Ingrese el numero de pedido',
                  onKeyPress: handleKeyPress,
                  type: 'text',
                  onChange: (e) =>
                    use.attributes.actions.setOrderPostsId(
                      parseInt(e.target.value, 10)
                    ),
                }}
              />
            </ContainerButton>
            <ContainerButton
              styles={{
                width: '100%',
                justifyContent: 'flex-start',
                custom: `
                  margin-top: 30px;`,
              }}
            >
              <Button
                title="regresar"
                buttonProps={{
                  onClick: () => returnModule(),
                }}
                styles={{
                  backgroundColor: '#c12429',
                }}
              />
            </ContainerButton>
          </>
        </SearchBox>
      </div>
    </>
  );
};
