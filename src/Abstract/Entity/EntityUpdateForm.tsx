import React from 'react';
import { css } from '@emotion/css';
import { StatesCountries, Countries } from '../../constants';
import {
  Input,
  InputName,
  InputLastName,
  InputEmail,
  InputPhone,
} from '../Input';
import type { InputProps } from '../Input';
import { ContainerButton } from '../Containers';
import { ContainerButtonPropsExtended } from '../Containers';
import { Button } from '../Button';
import type { ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { ModelForm, PhotoEntity } from '../Form';
import type { ModelFormPropsExtended, PhotoEntityProps } from '../Form';
import type { AddressAttributes, DocumentIdAttributes } from '../states';
import type { UseGafpriEntityReturn } from '../../states';

export type EntityUpdateFormProps = {
  use: UseGafpriEntityReturn;
  optionsButtonStatusContainerStyle?: string;
  optionsButtonTypeContainerStyle?: string;
  optionsButtonUpdateContainerStyle?: string;
  optionsButtonDeleteContainerStyle?: string;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  addressListContainerStyle?: string;
  documentListContainerStyle?: string;
  buttonStatusProps?: ButtonPropsExtended;
  buttonTypeProps?: ButtonPropsExtended;
  buttonAddressFactProps?: ButtonPropsExtended;
  buttonAddressDeleteProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailPhoneConatinerProps?: ContainerButtonPropsExtended;
  emailInputProps?: InputProps;
  phoneInputProps?: InputProps;
  addressListProps?: ListPropsExtended;
  documentListProps?: ListPropsExtended;
  propsPhoto?: PhotoEntityProps['props'];
};

export type EntityUpdateFormPropsExtended = {
  optionsButtonStatusContainerStyle?: string;
  optionsButtonTypeContainerStyle?: string;
  optionsButtonUpdateContainerStyle?: string;
  optionsButtonDeleteContainerStyle?: string;
  photoMainContainerStyle?: string;
  photoContainerStyle?: string;
  nameContainerStyle?: string;
  addressListContainerStyle?: string;
  documentListContainerStyle?: string;
  buttonStatusProps?: ButtonPropsExtended;
  buttonTypeProps?: ButtonPropsExtended;
  buttonAddressFactProps?: ButtonPropsExtended;
  buttonAddressDeleteProps?: ButtonPropsExtended;
  modelFormProps?: ModelFormPropsExtended;
  nameInputProps?: InputProps;
  lastNameInputProps?: InputProps;
  emailPhoneConatinerProps?: ContainerButtonPropsExtended;
  emailInputProps?: InputProps;
  phoneInputProps?: InputProps;
  addressListProps?: ListPropsExtended;
  documentListProps?: ListPropsExtended;
  propsPhoto?: PhotoEntityProps['props'];
};

const photoContainerStyleDefault = css`
  width: 100%;
`;

const photoMainContainerStyleDefault = css`
  display: flex;
  justify-content: space-between;
`;

const nameContainerStyleDefault = css`
  width: 100%;
`;

const optionsButtonContainerStyleDefault = css`
  display: flex;
  justify-content: space-evenly;
  width: 91.66667%;
  margin: 10px 0px;
`;

const optionsButtonUpdateContainerStyleDefault = css`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const addressListContainerStyleDefault = css`
  border-top: 0.1rem solid rgb(227, 223, 218);
  padding-top: 10px;
  width: 96%;
  margin-top: 15px;
`;

export const EntityUpdateForm = ({
  use,
  optionsButtonStatusContainerStyle = optionsButtonContainerStyleDefault,
  optionsButtonTypeContainerStyle = optionsButtonContainerStyleDefault,
  optionsButtonUpdateContainerStyle = optionsButtonUpdateContainerStyleDefault,
  optionsButtonDeleteContainerStyle = optionsButtonUpdateContainerStyleDefault,
  photoMainContainerStyle = photoMainContainerStyleDefault,
  photoContainerStyle = photoContainerStyleDefault,
  nameContainerStyle = nameContainerStyleDefault,
  addressListContainerStyle = addressListContainerStyleDefault,
  documentListContainerStyle = addressListContainerStyleDefault,
  buttonStatusProps,
  buttonTypeProps,
  buttonAddressFactProps,
  buttonAddressDeleteProps,
  modelFormProps,
  nameInputProps,
  lastNameInputProps,
  emailPhoneConatinerProps,
  emailInputProps,
  phoneInputProps,
  addressListProps,
  documentListProps,
  propsPhoto,
}: EntityUpdateFormProps): JSX.Element => {
  const currentEntity = use.data.actions.getById(
    use.attributes.states.currentId
  );

  const isPersonalForm = currentEntity?.type === 'personal';

  const status = currentEntity?.status || 'inactive';
  const titleStatus =
    status === 'active' ? 'Activo' : status === 'inactive' ? 'Inactivo' : '';

  const type = currentEntity?.type || 'personal';
  const titleType =
    type === 'personal'
      ? 'Persona Natural'
      : type === 'legal'
      ? 'Persona Jurídica'
      : '';

  const ButtonStatus: React.FC = () => {
    const color = status === 'active' ? '#439b57' : '#c12429';
    return (
      <div className={css(optionsButtonStatusContainerStyle)}>
        <Button
          title={titleStatus}
          styles={{
            fontSize: '15px',
            backgroundColor: color,
            cursor: 'off',
            padding: '8px 19px',
          }}
          Class="email-button"
          buttonProps={{
            title: `${titleStatus}`,
          }}
          {...buttonStatusProps}
        />
      </div>
    );
  };

  const ButtonType: React.FC = () => {
    const color = '#07b2e7';
    return (
      <div className={css(optionsButtonTypeContainerStyle)}>
        <Button
          title={titleType}
          styles={{
            fontSize: '15px',
            backgroundColor: color,
            cursor: 'off',
            padding: '8px 19px',
          }}
          Class="email-button"
          buttonProps={{
            title: `${titleType}`,
          }}
          {...buttonTypeProps}
        />
      </div>
    );
  };

  // Address
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonUpdateContainerStyle)}>
        <Button
          title="Fact..."
          buttonProps={{
            onClick: () => use.api.actions.changeAddress(id),
          }}
          styles={{
            fontSize: '10px',
          }}
          {...buttonAddressFactProps}
        />

        <Button
          title="Borrar"
          buttonProps={{
            onClick: () => use.api.actions.deleteAddress(id),
          }}
          styles={{
            fontSize: '10px',
            backgroundColor: '#c12429',
          }}
          {...buttonAddressDeleteProps}
        />
      </div>
    );
  };

  const address = currentEntity?.address || [];

  address.sort((a, b) => {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });

  const paginated = use.paginations.actions.getPaginated(
    address,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const itemAddress = item as AddressAttributes;
      const id = itemAddress.id || 0;
      const type =
        itemAddress.type === 'bill'
          ? 'Facturación'
          : itemAddress.type === 'shipping'
          ? 'Envío'
          : '';
      const stateCountry =
        StatesCountries[0][itemAddress?.country][0][itemAddress?.state] || '';
      const country = Countries[0][itemAddress?.country] || '';
      if (itemAddress.type !== 'bill') {
        return [
          type,
          itemAddress.address1,
          itemAddress.city,
          stateCountry,
          country,
          <ButtonUpdate id={id} />,
        ];
      } else {
        return [
          type,
          itemAddress.address1,
          itemAddress.city,
          stateCountry,
          country,
          '',
        ];
      }
    }) ?? [];
  const headers = ['Tipo', 'Dirección 1', 'Ciudad', 'Estado', 'Pais', 'Acción'];

  const totalPages = Math.ceil(
    address.length / use.paginations.states.itemsPerPage
  );

  //DocumentId

  const ButtonActionsDocument: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonDeleteContainerStyle)}>
        <Button
          title="Borrar"
          buttonProps={{
            onClick: () => use.api.actions.deleteDocument(id),
          }}
          styles={{
            fontSize: '10px',
            backgroundColor: '#c12429',
          }}
        />
      </div>
    );
  };

  const documents = currentEntity?.documentId || [];

  documents.sort((a, b) => {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });

  const documentPaginated = use.paginations.actions.getPaginated(
    documents,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const documentItems =
    documentPaginated?.map((item) => {
      const itemDocument = item as DocumentIdAttributes;
      const id = itemDocument.id || 0;
      const type = itemDocument.typeDocumentId?.name;
      const country = itemDocument.typeDocumentId?.country
        ? Countries[0][itemDocument.typeDocumentId.country]
        : '';
      const number =
        itemDocument.index !== null
          ? `${itemDocument.index}-${itemDocument.digit}`
          : `${itemDocument.digit}`;
      return [type, country, number, <ButtonActionsDocument id={id} />];
    }) ?? [];

  const documentHeaders = ['Tipo', 'Pais', 'Numero', 'Acción'];

  const documentTotalPages = Math.ceil(
    documents.length / use.paginations.states.itemsPerPage
  );

  React.useEffect(() => {
    if (currentEntity) {
      if (currentEntity.photo) {
        use.attributes.actions.setPhoto(currentEntity.photo);
        use.attributes.actions.validationPhoto(currentEntity.photo);
      }
      if (currentEntity.name)
        use.attributes.actions.changeName(currentEntity.name);
      if (currentEntity.lastName)
        use.attributes.actions.changeLastName(currentEntity.lastName);
      if (currentEntity.email)
        use.attributes.actions.changeEmail(currentEntity.email);
      if (currentEntity.phone)
        use.attributes.actions.changePhone(currentEntity.phone);
    }
  }, [currentEntity]);

  React.useEffect(() => {
    use.attributes.actions.validationButtonNextUpdate();
  }, [
    use.attributes.states.nameValid,
    use.attributes.states.lastNameValid,
    use.attributes.states.statusValid,
    use.attributes.states.typeValid,
    use.attributes.states.emailValid,
    use.attributes.states.phoneValid,
  ]);

  React.useEffect(() => {
    use.attributes.actions.setAddress(address);
    use.attributes.actions.setDocumentId(documents);
    use.attributes.actions.changeStatus({ label: titleStatus, value: status });
    use.attributes.actions.changeType({ label: titleType, value: type });
  }, []);

  const title1Text = isPersonalForm
    ? 'Actualizar personal natural'
    : 'Actualizar persona jurídica';
  const title2Text = isPersonalForm
    ? `Actualiza la persona natural # ${currentEntity?.id}`
    : `Actualiza la persona jurídica # ${currentEntity?.id}`;

  const buttonTitle = 'Actualizar';

  const handleActions = (action: string, value: any) => {
    switch (action) {
      case 'submit':
        use.api.actions.update();
        break;
      case 'return':
        use.pages.actions.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };

  return (
    <>
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
        boxProps={{
          styles: {
            width: '100%',
          },
        }}
        {...modelFormProps}
      >
        <>
          <div className={css(photoMainContainerStyle)}>
            <div className={css(photoContainerStyle)}>
              <PhotoEntity
                photo={use.attributes.states.photo}
                changePhoto={use.attributes.actions.changePhoto}
                submitting={use.attributes.states.submitting}
                changeError={use.error.actions.changeError}
                setSubmitting={use.attributes.actions.setSubmitting}
                props={propsPhoto}
              />
            </div>
            <div className={css(nameContainerStyle)}>
              <>
                <InputName
                  changeName={use.attributes.actions.changeName}
                  props={{
                    inputProps: {
                      defaultValue: use.attributes.states.name,
                    },
                    styles: {
                      width: '100%',
                    },
                    ...nameInputProps,
                  }}
                />
                {isPersonalForm && (
                  <InputLastName
                    changeLastName={use.attributes.actions.changeLastName}
                    props={{
                      inputProps: {
                        defaultValue: use.attributes.states.lastName,
                      },
                      styles: {
                        width: '100%',
                      },
                      ...lastNameInputProps,
                    }}
                  />
                )}
                <ButtonStatus />
                <ButtonType />
              </>
            </div>
          </div>
          <ContainerButton
            styles={{
              width: '100%',
              justifyContent: 'start',
            }}
            {...emailPhoneConatinerProps}
          >
            <>
              <InputEmail
                changeEmail={use.attributes.actions.changeEmail}
                props={{
                  inputProps: {
                    defaultValue: use.attributes.states.email,
                  },
                  styles: {
                    width: '92%',
                    padding: '09px 19px',
                  },
                  ...emailInputProps,
                }}
              />
              <InputPhone
                changePhone={use.attributes.actions.changePhone}
                props={{
                  inputProps: {
                    defaultValue: use.attributes.states.phone,
                  },
                  styles: {
                    width: '92%',
                    padding: '09px 19px',
                  },
                  ...phoneInputProps,
                }}
              />
            </>
          </ContainerButton>
          <div className={css(addressListContainerStyle)}>
            <List
              title="Direcciones"
              items={items}
              headers={headers}
              columns={6}
              propsPagination={{
                currentPage: use.paginations.states.currentPage,
                setCurrentPage: use.paginations.actions.setCurrentPage,
                totalPages: totalPages,
              }}
              actionButton={{
                title: 'Agregar',
                buttonProps: {
                  onClick: () => use.pages.actions.onAddAddress(),
                },
              }}
              {...addressListProps}
            />
          </div>
          <div className={css(documentListContainerStyle)}>
            <List
              title="Documentos"
              items={documentItems}
              headers={documentHeaders}
              columns={4}
              propsPagination={{
                currentPage: use.paginations.states.documentCurrentPage,
                setCurrentPage: use.paginations.actions.setDocumentCurrentPage,
                totalPages: documentTotalPages,
              }}
              actionButton={{
                title: 'Agregar',
                buttonProps: {
                  onClick: () => use.pages.actions.onAddDocument(),
                },
              }}
              {...documentListProps}
            />
          </div>
        </>
      </ModelForm>
    </>
  );
};
