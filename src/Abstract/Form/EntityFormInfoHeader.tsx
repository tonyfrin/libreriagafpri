import React from 'react';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriOrderReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';

export type EntityFormInfoHeaderProps = {
  useOrder: UseGafpriOrderReturn;
};

export const EntityFormInfoHeader = ({
  useOrder,
}: EntityFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title="Nombre: "
          info={`${useOrder.attributes.states.entity?.name} ${
            useOrder.attributes.states.entity?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={useOrder.attributes.states.entity?.address[0].address1 || ''}
        />
        <LineInfoTwo
          title="Teléfono: "
          info={useOrder.attributes.states.entity?.phone || ''}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <Button
            title="Cambiar cliente"
            buttonProps={{
              onClick: () => useOrder.pages.actions.returnInit(),
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
