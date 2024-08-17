import React, { KeyboardEvent } from 'react';
import { css, cx } from '@emotion/css';
import { Button } from '../Button';
import { ContainerButton } from '../Containers';
import { Title2 } from '../Title';
import { InputName, InputSku, Input } from '../Input';
import {
  SiteOptions,
  UseGafpriBudgetReturn,
  UseGafpriProductsReturn,
} from '../../states';
import { CartBudgetTable } from '../Table';

export type CartBudgetSectionsStylesContainerProps = {
  width?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  custom?: string;
};

export type CartBudgetSectionsStylesContentItemsProps = {
  display?: string;
  flexDirection?: string;
  textAlign?: string;
  custom?: string;
};

export type CartBudgetSectionsStylesContentOptionsProps = {
  display?: string;
  flexDirection?: string;
  custom?: string;
};

const cartBudgetSectionsStylesContainer = (
  styles: CartBudgetSectionsStylesContainerProps
) => css`
  width: ${styles.width || '70%'};
  padding: ${styles.padding || '12px'};
  border-radius: ${styles.borderRadius || '10px'};
  background-color: ${styles.backgroundColor || '#fff'};
  margin: ${styles.margin || 'auto'};
  ${styles.custom || ''}
`;

const cartBudgetSectionsStylesContentItems = (
  styles: CartBudgetSectionsStylesContentItemsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'column'};
  text-align: ${styles.textAlign || 'center'};
  ${styles.custom || ''}
`;

const cartBudgetSectionsStylesContentOptions = (
  styles: CartBudgetSectionsStylesContentOptionsProps
) => css`
  display: ${styles.display || 'flex'};
  flex-direction: ${styles.flexDirection || 'space-around'};
  ${styles.custom || ''}
`;

export type CartBudgetSectionsProps = {
  containerStyles?: CartBudgetSectionsStylesContainerProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  contentItemsStyles?: CartBudgetSectionsStylesContentItemsProps;
  contentItemsProps?: React.HTMLAttributes<HTMLDivElement>;
  sitesOptions: SiteOptions;
  useBudget: UseGafpriBudgetReturn;
  useProducts: UseGafpriProductsReturn;
  contentOptionsStyles?: CartBudgetSectionsStylesContentOptionsProps;
  contentOptionsProps?: React.HTMLAttributes<HTMLDivElement>;
  uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const CartBudgetSections = ({
  containerStyles = {},
  containerProps = {},
  contentItemsStyles = {},
  contentItemsProps = {},
  contentOptionsStyles = {},
  contentOptionsProps = {},
  sitesOptions,
  useBudget,
  useProducts,
  uploadBudget,
}: CartBudgetSectionsProps) => {
  const { className: containerClassName, ...restContainerProps } =
    containerProps;
  const { className: contentItemsClassName, ...restContentItemsProps } =
    contentItemsProps;
  const { className: contentOptionsClassName, ...restContentOptionsProps } =
    contentOptionsProps;

  const currentId =
    useBudget.attributes.states.currentId.toString() === '0'
      ? ''
      : useBudget.attributes.states.currentId.toString();

  return (
    <div
      className={cx(
        cartBudgetSectionsStylesContainer(containerStyles),
        containerClassName
      )}
      {...restContainerProps}
    >
      <div
        className={cx(
          cartBudgetSectionsStylesContentItems(contentItemsStyles),
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
                useBudget.useProductItems.actions.voidShoppingCart(),
            }}
          />
        </ContainerButton>
        <CartBudgetTable useBudget={useBudget} siteOptions={sitesOptions} />
      </div>
      <div
        className={cx(
          cartBudgetSectionsStylesContentOptions(contentOptionsStyles),
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
                onKeyPress: useBudget.pages.actions.processProductBySku,
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
                onKeyPress: useBudget.pages.actions.processProductByName,
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
              onKeyPress: uploadBudget,
              onChange: (e) =>
                useBudget.attributes.actions.setCurrentId(
                  parseInt(e.target.value, 10)
                ),
            }}
          />
        </ContainerButton>
      </div>
    </div>
  );
};
