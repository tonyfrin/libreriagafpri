import React from 'react';
import {
  ContainerButton,
  ContainerButtonPropsExtended,
} from '../../Containers';
import { ModelForm, ModelFormPropsExtended } from '../../Form';
import {
  InputName,
  SelectStatus,
  InputDescription,
  InputProps,
  InputCost,
  SelectType,
  InputShippingTimeDays,
  SelectAvailableShippingServices,
  SelectTaxStatus,
  SelectTaxClass,
} from '../../Input';
import type { UseGafpriShippingMethodsReturn } from '../../../states';
import { SHIPPING_METHODS_ROUTE } from '../../../constants';

export type ShippingMethodsFormProps = {
  use: UseGafpriShippingMethodsReturn;
  formType: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export type ShippingMethodsFormPropsExtended = {
  use?: UseGafpriShippingMethodsReturn;
  formType?: 'add' | 'update';
  modelFormProps?: ModelFormPropsExtended;
  infoContainerProps?: ContainerButtonPropsExtended;
  nameInputProps?: InputProps;
  descriptionInputProps?: InputProps;
};

export const ShippingMethodsForm = ({
  use,
  formType,
  modelFormProps,
  infoContainerProps,
  nameInputProps,
}: ShippingMethodsFormProps): JSX.Element => {
  const isAddForm = formType === 'add';
  const isUpdateForm = formType === 'update';
  const [inputType, setInputType] = React.useState(<></>);
  const [inputAvailableShippingServices, setInputAvailableShippingServices] =
    React.useState(<></>);
  const [inputTaxStatus, setInputTaxStatus] = React.useState(<></>);
  const [inputTaxClass, setInputTaxClass] = React.useState(<></>);
  const [inputStatus, setInputStatus] = React.useState(<></>);

  const currentItem = isUpdateForm
    ? use.data.actions.getById(use.attributes.states.currentId)
    : null;

  React.useEffect(() => {
    use.attributes.actions.validationShippingAreasId(
      parseInt(use.attributes.states.shippingAreasId, 10)
    );
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(
      use.attributes.states.description
    );
    use.attributes.actions.validationCost(
      parseFloat(use.attributes.states.cost)
    );
    use.attributes.actions.validationShippingTimeDays(
      parseFloat(use.attributes.states.shippingTimeDays)
    );
    use.attributes.actions.validationType(use.attributes.states.type);
    use.attributes.actions.validationAvailableShippingServices(
      use.attributes.states.availableShippingServices
    );
    use.attributes.actions.validationTaxStatus(use.attributes.states.taxStatus);
    use.attributes.actions.validationTaxClass(use.attributes.states.taxClass);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.shippingAreasId,
    use.attributes.states.name,
    use.attributes.states.description,
    use.attributes.states.cost,
    use.attributes.states.shippingTimeDays,
    use.attributes.states.type,
    use.attributes.states.availableShippingServices,
    use.attributes.states.taxStatus,
    use.attributes.states.taxClass,
    use.attributes.states.status,
    inputType,
    inputAvailableShippingServices,
    inputTaxStatus,
    inputTaxClass,
    inputStatus,
  ]);

  console.log('cost', use.attributes.states.cost);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNext();
  }, [
    use.attributes.states.shippingAreasIdValid,
    use.attributes.states.nameValid,
    use.attributes.states.descriptionValid,
    use.attributes.states.costValid,
    use.attributes.states.shippingTimeDaysValid,
    use.attributes.states.typeValid,
    use.attributes.states.availableShippingServicesValid,
    use.attributes.states.taxStatusValid,
    use.attributes.states.taxClassValid,
    use.attributes.states.statusValid,
  ]);

  React.useEffect(() => {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeShippingAreasId(
        `${currentItem.shippingAreasId}`
      );
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.changeDescription(currentItem.description);
      console.log('currentItem.cost', currentItem.cost);
      use.attributes.actions.changeCost(currentItem.cost);
      use.attributes.actions.changeShippingTimeDays(
        currentItem.shippingTimeDays
      );

      const type = use.attributes.states.typeOptions.find(
        (item) => item.value === currentItem.type
      ) || { value: '', label: 'Elija tipo' };
      use.attributes.actions.changeType(type);

      const availableShippingServices =
        use.attributes.states.availableShippingServicesOptions.find(
          (item) => item.value === currentItem.availableShippingServices
        ) || { value: '', label: 'Elija servicio de envío' };
      use.attributes.actions.changeAvailableShippingServices(
        availableShippingServices
      );

      const taxStatus = use.attributes.states.taxStatusOptions.find(
        (item) => item.value === currentItem.taxStatus
      ) || { value: '', label: 'Elija estado de impuestos' };
      use.attributes.actions.changeTaxStatus(taxStatus);

      const taxClass = use.attributes.states.taxClassOptions.find(
        (item) => item.value === currentItem.taxClass
      ) || { value: '', label: 'Elija clase de impuestos' };
      use.attributes.actions.changeTaxClass(taxClass);

      const status = use.attributes.states.statusOptions.find(
        (item) => item.value === currentItem.status
      ) || { value: '', label: 'Elija estado' };
      use.attributes.actions.changeStatus(status);
    }
  }, []);

  React.useEffect(() => {
    if (isAddForm) {
      setInputAvailableShippingServices(
        <SelectAvailableShippingServices
          change={use.attributes.actions.changeAvailableShippingServices}
          props={{
            title: 'Servicios de envío disponibles',
            options: use.attributes.states.availableShippingServicesOptions,
            defaultValue:
              use.attributes.states.availableShippingServicesDefault,
            styles: {
              width: '90%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );

      setInputType(
        <SelectType
          changeType={use.attributes.actions.changeType}
          props={{
            title: 'Tipo',
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );

      setInputTaxStatus(
        <SelectTaxStatus
          change={use.attributes.actions.changeTaxStatus}
          props={{
            title: 'Estado de impuestos',
            options: use.attributes.states.taxStatusOptions,
            defaultValue: use.attributes.states.taxStatusDefault,
            styles: {
              width: '90%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );

      setInputTaxClass(
        <SelectTaxClass
          change={use.attributes.actions.changeTaxClass}
          props={{
            title: 'Clase de impuestos',
            options: use.attributes.states.taxClassOptions,
            defaultValue: use.attributes.states.taxClassDefault,
            styles: {
              width: '90%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );

      setInputStatus(
        <SelectStatus
          changeStatus={use.attributes.actions.changeStatus}
          props={{
            title: 'Estado',
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            styles: {
              width: '104%',
            },
            // ...nameInputProps
          }}
          inputId={SHIPPING_METHODS_ROUTE}
        />
      );
    }
  }, []);

  React.useEffect(() => {
    if (isUpdateForm) {
      if (use.attributes.states.availableShippingServicesDefault.value !== '') {
        setInputAvailableShippingServices(
          <SelectAvailableShippingServices
            change={use.attributes.actions.changeAvailableShippingServices}
            props={{
              title: 'Servicios de envío disponibles',
              options: use.attributes.states.availableShippingServicesOptions,
              defaultValue:
                use.attributes.states.availableShippingServicesDefault,
              styles: {
                width: '90%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }

      if (use.attributes.states.typeDefault.value !== '') {
        setInputType(
          <SelectType
            changeType={use.attributes.actions.changeType}
            props={{
              title: 'Tipo',
              options: use.attributes.states.typeOptions,
              defaultValue: use.attributes.states.typeDefault,
              styles: {
                width: '90%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }

      if (use.attributes.states.taxStatusDefault.value !== '') {
        setInputTaxStatus(
          <SelectTaxStatus
            change={use.attributes.actions.changeTaxStatus}
            props={{
              title: 'Estado de impuestos',
              options: use.attributes.states.taxStatusOptions,
              defaultValue: use.attributes.states.taxStatusDefault,
              styles: {
                width: '90%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }

      if (use.attributes.states.taxClassDefault.value !== '') {
        setInputTaxClass(
          <SelectTaxClass
            change={use.attributes.actions.changeTaxClass}
            props={{
              title: 'Clase de impuestos',
              options: use.attributes.states.taxClassOptions,
              defaultValue: use.attributes.states.taxClassDefault,
              styles: {
                width: '90%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }

      if (use.attributes.states.statusDefault.value !== '') {
        setInputStatus(
          <SelectStatus
            changeStatus={use.attributes.actions.changeStatus}
            props={{
              title: 'Estado',
              options: use.attributes.states.statusOptions,
              defaultValue: use.attributes.states.statusDefault,
              styles: {
                width: '104%',
              },
              // ...nameInputProps
            }}
            inputId={SHIPPING_METHODS_ROUTE}
          />
        );
      }
    }
  }, [
    use.attributes.states.availableShippingServicesDefault.value,
    use.attributes.states.typeDefault,
    use.attributes.states.taxStatusDefault,
    use.attributes.states.taxClassDefault,
    use.attributes.states.statusDefault,
  ]);

  const title1Text = isAddForm
    ? 'Nuevo metodo de envío'
    : 'Actualizar metodo de envío';
  const title2Text = isAddForm
    ? 'Agrega un nuevo metodo de envío'
    : `Actualiza la información del metodo de envío #${currentItem?.id}`;

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

  return (
    <ModelForm
      boxProps={{
        styles: {
          width: '100%',
          height: '75vh',
          margin: '30px auto 0px',
        },
      }}
      mainButtonProps={{
        styles: {
          fontSize: '10px',
        },
        title: buttonTitle,
      }}
      returnButtonProps={{
        styles: {
          fontSize: '10px',
          backgroundColor: '#c12429',
        },
        title: 'volver',
        buttonProps: {
          onClick: use.pages.actions.returnInit,
        },
      }}
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
      buttonNextId={SHIPPING_METHODS_ROUTE}
      {...modelFormProps}
    >
      <>
        <ContainerButton
          styles={{
            width: '100%',
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
                  width: '90%',
                },
                ...nameInputProps,
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
            <InputDescription
              changeDescription={use.attributes.actions.changeDescription}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.description,
                  title: 'Descripción',
                },
                styles: {
                  width: '90%',
                },
                // ...nameInputProps
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
            justifyContent: 'space-between',
          }}
          {...infoContainerProps}
        >
          <>{inputStatus}</>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            {inputType}
            <InputCost
              changeCost={use.attributes.actions.changeCost}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.cost,
                  title: 'Precio',
                },
                styles: {
                  width: '90%',
                },
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            <InputShippingTimeDays
              change={use.attributes.actions.changeShippingTimeDays}
              props={{
                inputProps: {
                  defaultValue: use.attributes.states.shippingTimeDays,
                  title: 'Días de envío',
                },
                styles: {
                  width: '90%',
                },
                // ...nameInputProps
              }}
              inputId={SHIPPING_METHODS_ROUTE}
            />

            {inputAvailableShippingServices}
          </>
        </ContainerButton>
        <ContainerButton
          styles={{
            width: '100%',
          }}
          {...infoContainerProps}
        >
          <>
            {inputTaxStatus}
            {inputTaxClass}
          </>
        </ContainerButton>
      </>
    </ModelForm>
  );
};
