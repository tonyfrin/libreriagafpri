import React, { KeyboardEvent } from 'react';
import { ModelForm, EntityFormInfoHeader, OrderFormInfoHeader } from '../Form';
import {
  UseGafpriOrderReturn,
  SiteOptions,
  UseGafpriProductsReturn,
} from '../../states';
import { ModuleHeader } from '../Header';
import { CartSections } from '../Sections';

export type SalesProps = {
  useOrder: UseGafpriOrderReturn;
  sitesOptions: SiteOptions;
  useProducts: UseGafpriProductsReturn;
  uploadOrder: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const Sales = ({
  useOrder,
  sitesOptions,
  useProducts,
  uploadOrder,
}: SalesProps) => {
  return (
    <>
      <ModelForm
        titles={{
          title1: 'Modulo de ventas',
          title2: 'elegir productos',
        }}
        handleActions={() => console.log('handleActions')}
        buttonTitles={{
          mainButton: '',
          returnButton: '',
        }}
        error={useOrder.error.states.error}
        boxProps={{
          styles: {
            height: '100%',
            padding: '10px',
          },
        }}
      >
        <>
          <ModuleHeader>
            <EntityFormInfoHeader useOrder={useOrder} />
            <OrderFormInfoHeader
              useOrder={useOrder}
              siteOptions={sitesOptions}
            />
          </ModuleHeader>
        </>
      </ModelForm>
      <CartSections
        useOrder={useOrder}
        sitesOptions={sitesOptions}
        useProducts={useProducts}
        uploadOrder={uploadOrder}
      />
    </>
  );
};
