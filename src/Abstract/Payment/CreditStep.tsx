import React, { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import {
  UseGafpriPaymentReturn,
  SiteOptions,
  UseGafpriAccountsReceivableReturn,
  UseGafpriOrderReturn,
} from '../../states';
import { decimalFormatPriceConverter, formatDate } from '../../helpers';
import { PaymentHeader } from '../Header';
import { SingleBodyTable, SingleTable } from '../Table';
import { Button } from '../Button';
import { Input } from '../Input';

export type CreditStepProps = {
  use: UseGafpriPaymentReturn;
  useCredits: UseGafpriAccountsReceivableReturn;
  useOrder: UseGafpriOrderReturn;
  siteOptions: SiteOptions;
};

const orderStylesMainContainer = () => css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const orderStylesContainer = () => css`
  background-color: #fff;
  padding: 10px 40px;
  width: 90%;
  border-radius: 10px;
  height: auto;
  margin: 0;
`;

const creditHeaderLineContainerStyles = () => css`
  background-color: #eaeaea;
  margin: 1%;
  border-radius: 5px;
  padding: 1%;
  display: flex;
  font-size: 12px;
`;

const creditHeaderLineColStyles = (width: string, custom?: string) => css`
  text-align: center;
  width: ${width};
  margin: auto 0px;
  ${custom || ''};
`;

const TdStyle = (width: string, custom?: string) => css`
  width: ${width};
  border: 1px solid #ddd;
  padding: 4px;
  text-align: center;
  ${custom || ''}
`;

const checkboxConatinerStyle = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const buttonLoopContainerStyle = () => css`
  width: 95%;
  overflow: auto;
  margin: 20px auto;
  display: flex;
  justify-content: flex-end;
`;

interface CheckboxState {
  checkbox1: boolean;
  checkbox2: boolean;
}

export const CreditStep = ({
  use,
  useCredits,
  useOrder,
  siteOptions,
}: CreditStepProps): JSX.Element => {
  const [selectedCredit, setSelectedCredit] = useState<number | null>(null);
  const [checkboxStates, setCheckboxStates] = useState<CheckboxState[][]>([]);
  const [inputValues, setInputValues] = useState<{ [key: string]: number }>({});

  const goOrderView = (postsId: number): void => {
    useOrder.attributes.actions.setCurrentId(postsId);
    useCredits.pages.actions.onOrderView();
  };

  const goToPayment = () => {
    if (Object.keys(inputValues).length > 0) {
      let total = 0;
      Object.keys(inputValues).forEach((key) => {
        const postsId = parseInt(key);
        const value = parseFloat(`${inputValues[postsId]}`);
        total += value;
        use.attributes.useGeneralPaymentMethods.actions.addCreditPaymentPaymentMethod(
          postsId,
          siteOptions.currencyId,
          value
        );
      });
      use.attributes.actions.setTotal(`${total}`);
      useCredits.pages.actions.onCreditPayment();
    }
  };

  useEffect(() => {
    setCheckboxStates([]);
    setInputValues({});
  }, [selectedCredit]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    postsId: string,
    balance: number
  ) => {
    const newValue = parseFloat(e.target.value);

    if (Number.isNaN(newValue) && inputValues[postsId]) {
      removeInputValue(postsId);
      return;
    }

    if (newValue > balance) {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [postsId]: balance,
      }));
      return;
    }

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [postsId]: newValue,
    }));
  };

  const removeInputValue = (postsIdToRemove: string) => {
    setInputValues((prevInputValues) => {
      // Crear una copia del estado actual
      const newInputValues = { ...prevInputValues };
      // Eliminar el postsId del objeto
      delete newInputValues[postsIdToRemove];
      // Devolver el nuevo objeto de valores de entrada
      return newInputValues;
    });
  };

  const handleCheckboxChange = (
    index: number,
    coIndex: number,
    checkboxIndex: keyof CheckboxState,
    value: boolean,
    postsId: string,
    amount?: string
  ) => {
    setCheckboxStates((prevStates) => {
      const newStates = [...prevStates];

      // Asegúrate de que haya un estado previo para el índice actual
      if (!newStates[index]) {
        newStates[index] = [];
      }

      // Asegúrate de que haya un estado previo para el índice actual del array interno de checkboxes
      if (!newStates[index][coIndex]) {
        newStates[index][coIndex] = {
          checkbox1: false,
          checkbox2: false,
        };
      }

      // Actualiza el estado del checkbox
      newStates[index][coIndex][checkboxIndex] = !value;

      // Desactiva el otro checkbox solo si se hace clic en el mismo checkbox
      if (
        newStates[index][coIndex][checkboxIndex] &&
        checkboxIndex === 'checkbox1'
      ) {
        newStates[index][coIndex].checkbox2 = false;
      } else if (
        newStates[index][coIndex][checkboxIndex] &&
        checkboxIndex === 'checkbox2'
      ) {
        newStates[index][coIndex].checkbox1 = false;
      }

      return newStates;
    });

    if (value) {
      removeInputValue(postsId);
    }

    if (amount && !value) {
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [postsId]: parseFloat(amount),
      }));
    }
  };

  const toggleCreditDetails = (index: number) => {
    setSelectedCredit(selectedCredit === index ? null : index);
  };

  const credits = useCredits.data.states.items.data.items || [];

  const sortedCredits = credits.slice().sort((a, b) => {
    const comparison = a.entity.name.localeCompare(b.entity.name, undefined, {
      sensitivity: 'base',
    });
    return comparison;
  });

  const items = sortedCredits.map((item, index) => {
    if (item.balance > 0) {
      const documentId = item.entity.documentId[0].index
        ? `${item.entity.documentId[0].index}-${item.entity.documentId[0].digit}`
        : item.entity.documentId[0].digit;
      const lastName = item.entity?.lastName || '';
      const fullName = `${item.entity.name} ${lastName}`;
      const header = [
        'fecha',
        'Credito#',
        'Pedido#',
        'Limite de Pago',
        'saldo',
        'Pagar Todo',
        'Abono',
      ];
      const creditOpening = item.creditOpening || [];
      creditOpening.sort((a, b) => {
        const postsIdA = a.postsId || 0;
        const postsIdB = b.postsId || 0;
        return postsIdA - postsIdB;
      });

      const data = creditOpening.map((co, coIndex) => {
        const orderId = co.paymentMethods?.payment?.order?.[0]?.postsId || 0;

        return [
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            {formatDate(`${co.posts?.createdAt}`)}
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            {co.postsId}
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            <Button
              title={orderId}
              styles={{
                fontSize: '8px',
              }}
              buttonProps={{
                onClick: () => {
                  goOrderView(orderId);
                },
              }}
            />
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            {formatDate(`${co.payDayLimit}`)}
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            {decimalFormatPriceConverter(
              co.balance || 0,
              siteOptions.DECIMAL_NUMBERS,
              siteOptions.CURRENCY_SYMBOL,
              siteOptions.CURRENCY_LOCATION
            )}
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            <Input
              inputProps={{
                type: 'checkbox',
                checked:
                  checkboxStates[index] && checkboxStates[index][coIndex]
                    ? checkboxStates[index][coIndex].checkbox1
                    : false,
                onChange: () =>
                  handleCheckboxChange(
                    index,
                    coIndex,
                    'checkbox1',
                    checkboxStates[index] && checkboxStates[index][coIndex]
                      ? checkboxStates[index][coIndex].checkbox1
                      : false,
                    `${co.postsId}`,
                    `${co.balance}`
                  ),
              }}
            />
          </td>,
          <td className={cx(TdStyle('14.2857143%', `text-align: center;`))}>
            <div className={cx(checkboxConatinerStyle())}>
              <Input
                containerStyles={{
                  margin: 'auto',
                  width: '25%',
                }}
                inputProps={{
                  type: 'checkbox',
                  checked:
                    checkboxStates[index] && checkboxStates[index][coIndex]
                      ? checkboxStates[index][coIndex].checkbox2
                      : false,
                  onChange: () =>
                    handleCheckboxChange(
                      index,
                      coIndex,
                      'checkbox2',
                      checkboxStates[index] && checkboxStates[index][coIndex]
                        ? checkboxStates[index][coIndex].checkbox2
                        : false,
                      `${co.postsId}`
                    ),
                }}
              />
              {checkboxStates[index] &&
                checkboxStates[index][coIndex] &&
                checkboxStates[index][coIndex].checkbox2 && (
                  <>
                    <Input
                      containerStyles={{
                        margin: 'auto',
                        width: '75%',
                      }}
                      styles={{
                        fontSize: '10px',
                      }}
                      inputProps={{
                        type: 'number',
                        placeholder: 'Monto',
                        value: inputValues[`${co.postsId}`] || '',
                        onChange: (e) =>
                          handleInputChange(
                            e,
                            `${co.postsId}`,
                            parseFloat(`${co.balance}`)
                          ),
                        max: parseFloat(`${co.balance}`),
                      }}
                    />
                  </>
                )}
            </div>
          </td>,
        ];
      });
      return [
        <>
          <div className={cx(creditHeaderLineContainerStyles())}>
            <span className={cx(creditHeaderLineColStyles('16.66666666%'))}>
              {documentId}
            </span>
            <span className={cx(creditHeaderLineColStyles('50%'))}>
              {fullName}
            </span>
            <span className={cx(creditHeaderLineColStyles('25%'))}>
              {decimalFormatPriceConverter(
                item.balance || 0,
                siteOptions.DECIMAL_NUMBERS,
                siteOptions.CURRENCY_SYMBOL || '',
                siteOptions.CURRENCY_LOCATION
              )}
            </span>
            <span className={cx(creditHeaderLineColStyles('8.33333333%'))}>
              <Button
                title="Ver"
                styles={{
                  fontSize: '8px',
                }}
                buttonProps={{
                  onClick: () => toggleCreditDetails(index),
                }}
              />
            </span>
          </div>
          {selectedCredit === index && (
            <>
              <div>
                <SingleTable
                  headers={header}
                  data={data}
                  containerStyles={{
                    width: '98%',
                    custom: `
                    margin: auto;
                `,
                  }}
                />
                <div className={cx(buttonLoopContainerStyle())}>
                  <Button
                    title="Cerrar"
                    styles={{
                      fontSize: '8px',
                      margin: '0px 15px 0px 0px',
                      backgroundColor: '#c12429',
                    }}
                    buttonProps={{
                      onClick: () => toggleCreditDetails(index),
                    }}
                  />

                  <Button
                    title="Pagar"
                    styles={{
                      fontSize: '8px',
                      backgroundColor: '#439b57',
                    }}
                    buttonProps={{
                      onClick: () => goToPayment(),
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </>,
      ];
    }
    return [];
  });

  return (
    <>
      <PaymentHeader
        error={use.error.states.error}
        moduleName="Modulo de entradas"
        stepName="Cuentas por cobrar"
        step="2"
        returnFunction={use.subPagesDeposit.actions.onOrder}
        returnTitle="Regresar"
      />
      <div className={cx(orderStylesMainContainer())}>
        <div className={cx(orderStylesContainer())}>
          <SingleBodyTable data={items} />
        </div>
      </div>
    </>
  );
};
