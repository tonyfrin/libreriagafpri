import React from 'react';
import { ContainerHeaderInfo, ContainerButton } from '../Containers';
import { UseGafpriBudgetReturn } from '../../states';
import { Button } from '../Button';
import { LineInfoTwo } from '../Li';

export type EntityBudgetFormInfoHeaderProps = {
  useBudget: UseGafpriBudgetReturn;
};

export const EntityBudgetFormInfoHeader = ({
  useBudget,
}: EntityBudgetFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title="Nombre: "
          info={`${useBudget.attributes.states.entity?.name} ${
            useBudget.attributes.states.entity?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={useBudget.attributes.states.entity?.address[0].address1 || ''}
        />
        <LineInfoTwo
          title="Teléfono: "
          info={useBudget.attributes.states.entity?.phone || ''}
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
              onClick: () => useBudget.pages.actions.returnInit(),
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
