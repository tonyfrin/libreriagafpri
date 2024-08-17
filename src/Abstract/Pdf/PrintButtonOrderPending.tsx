import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../Button';
import { OrderPendingPdf } from '../Pdf';
import { SiteOptions } from '../../states';
import { Loading } from '../../Components';
import { OrderAttributes } from '../states';

export type PrintButtonOrderPendingProps = {
  order: OrderAttributes;
  siteOptions: SiteOptions;
  logoPdf: string;
};

export const PrintButtonOrderPending = ({
  order,
  siteOptions,
  logoPdf,
}: PrintButtonOrderPendingProps) => {
  return (
    <>
      {order && (
        <PDFDownloadLink
          document={
            <OrderPendingPdf
              order={order}
              logo={logoPdf}
              siteOptions={siteOptions}
            />
          }
          fileName={`pedido${order.postsId}.pdf`}
        >
          {({ blob, url, loading, error }) => {
            return loading ? (
              <Loading
                mainStyles={{
                  padding: '0px',
                }}
                divStyle={{
                  border: '3px solid #eee',
                  borderTop: '3px solid #077bb4',
                  width: '20px',
                  height: '20px',
                }}
              />
            ) : (
              <Button
                title="Imprimir"
                styles={{
                  fontSize: '10px',
                }}
              />
            );
          }}
        </PDFDownloadLink>
      )}
    </>
  );
};
