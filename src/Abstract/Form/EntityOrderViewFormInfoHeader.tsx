import React from 'react';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';
import { OrderAttributes } from '../states';

export type EntityOrderViewFormInfoHeaderProps = {
  order: OrderAttributes;
  returnFunction: () => void;
};

export const EntityOrderViewFormInfoHeader = ({
  order,
  returnFunction,
}: EntityOrderViewFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title="Nombre: "
          info={`${order.orderCustomer[0].name} ${
            order.orderCustomer[0]?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={order.orderCustomer[0].address[0].address1 || ''}
        />
        <LineInfoTwo
          title="Teléfono: "
          info={order.orderCustomer[0].phone || ''}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <Button
            title="regresar"
            buttonProps={{
              onClick: () => returnFunction(),
            }}
            styles={{
              fontSize: '12px',
              backgroundColor: '#c12429',
            }}
          />
        </ContainerButton>
      </ContainerHeaderInfo>
    </>
  );
};
