import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../Button';
import { BudgetPdf } from '../Pdf';
import { SiteOptions } from '../../states';
import { Loading } from '../../Components';
import { BudgetAttributes } from '../states';

export type PrintButtonBudgetProps = {
  budget: BudgetAttributes;
  siteOptions: SiteOptions;
  logoPdf: string;
};

export const PrintButtonBudget = ({
  budget,
  siteOptions,
  logoPdf,
}: PrintButtonBudgetProps) => {
  return (
    <>
      {budget && (
        <PDFDownloadLink
          document={
            <BudgetPdf
              budget={budget}
              logo={logoPdf}
              siteOptions={siteOptions}
            />
          }
          fileName={`presupuesto${budget.postsId}.pdf`}
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
