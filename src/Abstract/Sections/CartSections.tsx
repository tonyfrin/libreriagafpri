import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import { Title2 } from '../Title';
import { InputName, InputSku, Input } from '../Input';
import {
  SiteOptions,
  UseGafpriOrderReturn,
  UseGafpriProductsReturn,
} from '../../states';
import { CartTable } from '../Table';

export type CartSectionsStylesContainerProps = {
  width?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

export type CartSectionsStylesContentItemsProps = {
  display?: string;
  flexDirection?: string;
  textAlign?: string;
  custom?: string;
};

export type CartSectionsStylesContentOptionsProps = {
  display?: string;
  flexDirection?: string;
  custom?: string;
};

const cartSectionsStylesContainer = (
  styles: CartSectionsStylesContainerProps
) => css`
  width: ${styles.width || '70%'};
  padding: ${styles.padding || '12px'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const cartSectionsStylesContentItems = (
  styles: CartSectionsStylesContentItemsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  text-align: ${styles.textAlign || 'center'};
  ${styles.custom || ''}
`;

const cartSectionsStylesContentOptions = (
  styles: CartSectionsStylesContentOptionsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'space-around'};
  ${styles.custom || ''}
`;

export type CartSectionsProps = {
  containerStyles?: CartSectionsStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: CartSectionsStylesContentItemsProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
  useOrder: UseGafpriOrderReturn;
  useProducts: UseGafpriProductsReturn;
  contentOptionsStyles?: CartSectionsStylesContentOptionsProps;
  contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
  uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const CartSections = ({
  containerStyles = {},
  containerProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  contentOptionsStyles = {},
  contentOptionsProps = {},
  sitesOptions,
  useOrder,
  useProducts,
  uploadOrder,
}: CartSectionsProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;
  const { className: contentOptionsClassName, ...restContentOptionsProps } =
    contentOptionsProps;

  const currentId =
    useOrder.attributes.states.currentId.toString() === '0'
      ? ''
      : useOrder.attributes.states.currentId.toString();

  return (
    <div
      className={cx(
        cartSectionsStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          cartSectionsStylesContentItems(contentItemsStyles),
          contentItemsClassName
        )}
        {...restContentItemsProps}
      >
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin: 20px 0px 0px 0px;',
          }}
        >
          <Title2 title="Carrito" />
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'flex-end',
            custom: 'margin: 10px 0px;',
          }}
        >
          <Button
            title="Vaciar carrito"
            styles={{
              fontSize: '8px',
              backgroundColor: '#c12429',
            }}
            buttonProps={{
              onClick: () =>
                useOrder.useProductItems.actions.voidShoppingCart(),
            }}
          />
        </ContainerButton>
        <CartTable useOrder={useOrder} siteOptions={sitesOptions} />
      </div>
      <div
        className={cx(
          cartSectionsStylesContentOptions(contentOptionsStyles),
          contentOptionsClassName
        )}
        {...restContentOptionsProps}
      >
        <ContainerButton
          styles={{
            justifyContent: 'flex-end',
          }}
        >
          <InputSku
            change={(e) => useProducts.attributes.actions.changeSku(e)}
            props={{
              styles: {
                width: '70%',
              },
              containerStyles: {
                custom: 'display: grid;',
              },
              inputProps: {
                onKeyPress: useOrder.pages.actions.processProductBySku,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  useProducts.attributes.actions.changeSku(e.target.value),
                value: useProducts.attributes.states.sku,
              },
            }}
          />
        </ContainerButton>
        <ContainerButton
          styles={{
            justifyContent: 'flex-end',
          }}
        >
          <InputName
            changeName={(e: string) =>
              useProducts.attributes.actions.changeName(e)
            }
            props={{
              inputProps: {
                title: 'Nombre',
                onKeyPress: useOrder.pages.actions.processProductByName,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                  useProducts.attributes.actions.changeName(e.target.value),
                value: useProducts.attributes.states.name,
              },
              styles: {
                width: '70%',
              },
              containerStyles: {
                custom: 'display: grid;',
              },
            }}
          />
        </ContainerButton>
        <ContainerButton
          styles={{
            justifyContent: 'flex-end',
          }}
        >
          <Input
            styles={{
              width: '70%',
            }}
            inputProps={{
              title: 'Cargar Pedido/Presupuesto',
              placeholder: 'Ingrese el numero',
              value: currentId,
              onKeyPress: uploadOrder,
              onChange: (e) =>
                useOrder.attributes.actions.setCurrentId(
                  parseInt(e.target.value, 10)
                ),
            }}
          />
        </ContainerButton>
      </div>
    </div>
  );
};
