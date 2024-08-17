import React from 'react';
import {
  ModelForm,
  EntityBudgetViewFormInfoHeader,
  BudgetViewFormInfoHeader,
} from '../Form';
import { UseGafpriBudgetReturn, SiteOptions } from '../../states';
import { ModuleHeader } from '../Header';
import { CartBudgetViewSections } from '../Sections';

export type BudgetViewProps = {
  useBudget: UseGafpriBudgetReturn;
  sitesOptions: SiteOptions;
  logoPdf: string;
};

export const BudgetView = ({
  useBudget,
  sitesOptions,
  logoPdf,
}: BudgetViewProps) => {
  const budget = useBudget.data.actions.getById(
    useBudget.attributes.states.currentId
  );

  return (
    <>
      {budget && (
        <>
          <ModelForm
            titles={{
              title1: 'Modulo de presupuestos',
              title2: 'Vista de presupuesto',
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
              <ModuleHeader>
                <EntityBudgetViewFormInfoHeader
                  budget={budget}
                  useBudget={useBudget}
                />
                <BudgetViewFormInfoHeader
                  budget={budget}
                  siteOptions={sitesOptions}
                  logoPdf={logoPdf}
                />
              </ModuleHeader>
            </>
          </ModelForm>
          <CartBudgetViewSections budget={budget} sitesOptions={sitesOptions} />
        </>
      )}
    </>
  );
};
