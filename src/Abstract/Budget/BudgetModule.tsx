import React, { KeyboardEvent } from 'react';
import {
  ModelForm,
  EntityBudgetFormInfoHeader,
  BudgetFormInfoHeader,
} from '../Form';
import {
  UseGafpriBudgetReturn,
  SiteOptions,
  UseGafpriProductsReturn,
} from '../../states';
import { ModuleHeader } from '../Header';
import { CartBudgetSections } from '../Sections';

export type BudgetModuleProps = {
  useBudget: UseGafpriBudgetReturn;
  sitesOptions: SiteOptions;
  useProducts: UseGafpriProductsReturn;
  uploadBudget: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const BudgetModule = ({
  useBudget,
  sitesOptions,
  useProducts,
  uploadBudget,
}: BudgetModuleProps) => {
  return (
    <>
      <ModelForm
        titles={{
          title1: 'Modulo de presupuestos',
          title2: 'elegir productos',
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
            <EntityBudgetFormInfoHeader useBudget={useBudget} />
            <BudgetFormInfoHeader
              useBudget={useBudget}
              siteOptions={sitesOptions}
            />
          </ModuleHeader>
        </>
      </ModelForm>
      <CartBudgetSections
        useBudget={useBudget}
        sitesOptions={sitesOptions}
        useProducts={useProducts}
        uploadBudget={uploadBudget}
      />
    </>
  );
};
