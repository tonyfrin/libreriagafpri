import React from 'react';
import { css } from '@emotion/css';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import { InputName, InputDescription, InputProps } from '../../Input';
import { Button, ButtonOptionsContainer } from '../../Button';
import { Countries } from '../../../constants';
import type { UseGafpriTaxClassesReturn } from '../../../states';
import { ListContainer } from '../../List';
import { Modal } from '../../Modal';
import { TaxRates } from '../../../Components';

export type TaxClassesFormProps = {
  use: UseGafpriTaxClassesReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export type TaxClassesFormPropsExtended = {
  use?: UseGafpriTaxClassesReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

const containerButtonsStyles = css`
  display: flex;
  justify-content: center;
`;

export const TaxClassesForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
}: TaxClassesFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(
      use.attributes.states.description
    );
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.description]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.descriptionValid]);

  React.useEffect(() => {
    if (currentItem) {
      use.attributes.actions.changeName(currentItem.name);
      if (currentItem.description)
        use.attributes.actions.changeDescription(currentItem.description);
    }
  }, []);

  const title1Text = isAddForm ? 'Nueva Clase' : 'Actualizar Clase';
  const title2Text = isAddForm
    ? 'Agrega una nueva calse de impuesto'
    : `Actualiza la información de la clase de impuesto #${currentItem?.id}`;

  const buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  const buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  const goToTaxRates = () => {
    if (currentItem?.id) {
      use.useTaxRates.pages.actions.onAdd();
      use.useTaxRates.attributes.actions.changeTaxClasses(`${currentItem?.id}`);
      use.pages.actions.openModalPage();
    }
  };

  //Items for the list
  const goToTaxRatesUpdate = (id: number) => {
    use.useTaxRates.pages.actions.goUpdate(id);
    use.pages.actions.openModalPage();
  };

  const ButtonActionsTaxRates: React.FC<{ id: number }> = ({ id }) => {
    return (
      <>
        <div className={css(containerButtonsStyles)}>
          <ButtonOptionsContainer
            props={{
              title: 'Actualizar',
              buttonProps: {
                onClick: () => goToTaxRatesUpdate(id),
              },
              styles: {
                fontSize: '10px',
                margin: '0px 5px 0px 0px',
              },
            }}
          />
          <ButtonOptionsContainer
            props={{
              title: 'Borrar',
              buttonProps: {
                onClick: () => use.useTaxRates.api.actions.erase(id),
              },
              styles: {
                fontSize: '10px',
                backgroundColor: '#c12429',
              },
            }}
          />
        </div>
      </>
    );
  };

  const taxRates = currentItem?.id
    ? use.useTaxRates.data.actions.filterByTaxClassesId(currentItem?.id)
    : [];

  taxRates.sort((a, b) => {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });

  const taxRatesPaginated = use.useTaxRates.paginations.actions.getPaginated(
    taxRates,
    use.useTaxRates.paginations.states.currentPage,
    use.useTaxRates.paginations.states.itemsPerPage
  );

  //id

  const taxRatesItems =
    taxRatesPaginated?.map((item) => {
      const country = Countries[0][item?.country] || '';
      const rate = `${item.rate} %`;

      return [country, rate, <ButtonActionsTaxRates id={item.id} />];
    }) ?? [];

  const headers = ['País', 'Porcentaje', 'Acción'];

  const totalPages = Math.ceil(
    taxRates.length / use.useTaxRates.paginations.states.itemsPerPage
  );

  return (
    <ModelForm
      titles={{
        title1: title1Text,
        title2: title2Text,
      }}
      buttonTitles={{
        mainButton: buttonTitle,
        returnButton: 'Volver',
      }}
      handleActions={handleActions}
      error={use.error.states.error}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputName
              changeName={use.attributes.actions.changeName}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.name,
                  title: 'Nombre',
                },
                styles: {
                  width: '100%',
                },
                ...nameInputProps,
              }}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '96.5%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputDescription
              changeDescription={use.attributes.actions.changeDescription}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.description,
                  title: 'Descripción',
                },
                styles: {
                  width: '100%',
                },
              }}
            />
          </>
        </ContainerButton>
        {isUpdateForm && taxRates.length > 0 ? (
          <>
            <ListContainer
              propsList={{
                title: 'Tasas',
                items: taxRatesItems,
                headers: headers,
                columns: 3,
                propsPagination: {
                  currentPage: use.useTaxRates.paginations.states.currentPage,
                  setCurrentPage:
                    use.useTaxRates.paginations.actions.setCurrentPage,
                  totalPages: totalPages,
                },
                actionButton: {
                  title: 'Agregar',
                  buttonProps: {
                    onClick: () => goToTaxRates(),
                  },
                },
              }}
            />
          </>
        ) : (
          isUpdateForm &&
          taxRates.length === 0 && (
            <>
              <ContainerButton
                styles={{
                  width: '96.5%',
                }}
                {...infoContainerProps}
              >
                <Button
                  title="Agregar tasa de impuestos"
                  buttonProps={{ onClick: () => goToTaxRates() }}
                />
              </ContainerButton>
            </>
          )
        )}
        <Modal open={use.pages.states.modalPage}>
          <>
            <TaxRates use={use.useTaxRates} />
          </>
        </Modal>
      </>
    </ModelForm>
  );
};
