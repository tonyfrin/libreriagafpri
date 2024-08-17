import React from 'react';
import { ModelForm } from '../Form';
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
import { BudgetPrintTable } from '../Table/BudgetPrintTable';

export type BudgetPrintProps = {
  useBudget: UseGafpriBudgetReturn;
  sitesOptions: SiteOptions;
};

export const BudgetPrint = ({ useBudget, sitesOptions }: BudgetPrintProps) => {
  return (
    <>
      <ModelForm
        titles={{
          title1: 'Modulo de presupuestos',
          title2: 'imprimir presupuesto',
        }}
        handleActions={() => console.log('handleActions')}
        buttonTitles={{
          mainButton: '',
          returnButton: '',
        }}
        error={useBudget.error.states.error}
        boxProps={{
          styles: {
            height: '100%',
            padding: '10px',
          },
        }}
      >
        <>
          <BudgetPrintTable siteOptions={sitesOptions} useBudget={useBudget} />
        </>
      </ModelForm>
    </>
  );
};
