import React from 'react';
import { ContainerHeaderInfo } from '../Containers';
import { LineInfoTwo } from '../Li';
import type { BudgetAttributes } from '../states';
import { ContainerButton } from '../Containers';
import { Button } from '../Button';
import { UseGafpriBudgetReturn } from '../../states';

export type EntityBudgetViewFormInfoHeaderProps = {
  budget: BudgetAttributes;
  useBudget: UseGafpriBudgetReturn;
};

export const EntityBudgetViewFormInfoHeader = ({
  budget,
  useBudget,
}: EntityBudgetViewFormInfoHeaderProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo
          title={budget.budgetCustomer[0].documentType || ''}
          info={`${
            budget.budgetCustomer[0].documentIndex
              ? `${budget.budgetCustomer[0].documentIndex}-`
              : ''
          }${budget.budgetCustomer[0].documentDigit}`}
        />
        <LineInfoTwo
          title="Nombre: "
          info={`${budget.budgetCustomer[0].name} ${
            budget.budgetCustomer[0]?.lastName || ''
          }`}
        />
        <LineInfoTwo
          title="Dirección: "
          info={budget.budgetCustomer[0].address[0].address1 || ''}
        />
        <LineInfoTwo
          title="Teléfono: "
          info={budget.budgetCustomer[0].phone || ''}
        />
        <ContainerButton
          styles={{
            width: '100%',
            custom: 'margin-top: 30px;',
          }}
        >
          <>
            <Button
              title="Regresar"
              buttonProps={{
                onClick: () => useBudget.pages.actions.onPrintTable(),
              }}
              styles={{
                fontSize: '12px',
                backgroundColor: '#c12429',
              }}
            />
          </>
        </ContainerButton>
      </ContainerHeaderInfo>
    </>
  );
};
