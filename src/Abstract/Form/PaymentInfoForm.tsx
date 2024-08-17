import React from 'react';
import { ContainerHeaderInfo } from '../Containers';
import { LineInfoTwo } from '../Li';

export type PaymentInfoFormProps = {
  type: string;
  postsId: string;
  total: string;
  totalMethodsPayment: string;
  difference: string;
};

export const PaymentInfoForm = ({
  type,
  postsId,
  total,
  totalMethodsPayment,
  difference,
}: PaymentInfoFormProps) => {
  return (
    <>
      <ContainerHeaderInfo>
        <LineInfoTwo title="tipo: " info={type} />
        <LineInfoTwo title="Numero(s): " info={postsId} />
        <LineInfoTwo title="Pago Total: " info={total} />
        <LineInfoTwo title="Pagos agregados: " info={totalMethodsPayment} />
        <LineInfoTwo title="Diferencia: " info={difference} />
      </ContainerHeaderInfo>
    </>
  );
};
