import React from 'react';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriOrderReturnReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';

export type EntityFormOrderReturnInfoHeaderProps = {
  useOrderReturn: UseGafpriOrderReturnReturn;
};

export const EntityFormOrderReturnInfoHeader = ({
  useOrderReturn,
}: EntityFormOrderReturnInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title="Pedido #: "
          info={`${useOrderReturn.attributes.states.orderPostsId || ''}`}
        />
        <LineInfoTwo
          title="Nombre: "
          info={`${useOrderReturn.attributes.states.entity?.name} ${
            useOrderReturn.attributes.states.entity?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={
            useOrderReturn.attributes.states.entity?.address[0].address1 || ''
          }
        />
        <LineInfoTwo
          title="Teléfono: "
          info={useOrderReturn.attributes.states.entity?.phone || ''}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <Button
            title="Cambiar pedido"
            buttonProps={{
              onClick: () => useOrderReturn.pages.actions.returnInit(),
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
