import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button } from '../Button';
import type { ButtonProps, ButtonPropsExtended } from '../Button';
import { List } from '../List';
import type { ListPropsExtended } from '../List';
import { Error } from '../Error';
import type { ErrorProps } from '../Error';
import { Header } from '../Header';
import { HeaderProps } from '../Header';
import { formatPhoneNumber } from '../../helpers';
import type { UseUserReturn } from '../../states';

export type InitUserProps = {
  use: UseUserReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  viewButtonProps?: ButtonProps;
  emailButtonProps?: ButtonPropsExtended;
  phoneButtonProps?: ButtonPropsExtended;
  statusButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitUserPropsExtended = {
  use?: UseUserReturn;
  optionButtonContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  viewButtonProps?: ButtonProps;
  emailButtonProps?: ButtonPropsExtended;
  phoneButtonProps?: ButtonPropsExtended;
  statusButtonProps?: ButtonPropsExtended;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionButtonContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitUser = ({
  use,
  optionButtonContainerStyle = defaultOptionButtonContainerStyle,
  updateButtonProps = {
    title: 'Actualizar',
    styles: {
      fontSize: '10px',
    },
  },
  viewButtonProps = {
    title: 'Ver',
    styles: {
      fontSize: '10px',
    },
  },
  emailButtonProps,
  phoneButtonProps,
  statusButtonProps,
  headerProps = {
    title: 'Usuarios',
    buttonLargeProps: {
      label: 'Añadir Usuario',
      onClick: use.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega un nuevo usuario.',
    },
  },
  errorProps = {
    error: use.states.error,
  },
  listProps,
}: InitUserProps): JSX.Element => {
  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.actions.goUpdate(id),
          }}
          {...updateButtonProps}
        />

        <Button
          buttonProps={{
            onClick: () => use.actions.goView(id),
          }}
          {...viewButtonProps}
        />
      </div>
    );
  };

  const ButtonEmail: React.FC<{ email: string; isActive: boolean }> = ({
    email,
    isActive,
  }) => {
    const color = isActive ? '#439b57' : '#c12429';
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title={email}
          styles={{
            fontSize: '10px',
            backgroundColor: color,
            cursor: 'off',
          }}
          Class="email-button"
          buttonProps={{
            title: `${email}`,
          }}
          {...emailButtonProps}
        />
      </div>
    );
  };

  const ButtonPhone: React.FC<{ phone: string; isActive: boolean }> = ({
    phone,
    isActive,
  }) => {
    const color = isActive ? '#439b57' : '#c12429';
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title={phone}
          styles={{
            fontSize: '10px',
            backgroundColor: color,
            cursor: 'off',
          }}
          {...phoneButtonProps}
        />
      </div>
    );
  };

  const ButtonStatus: React.FC<{ status: string; isActive: boolean }> = ({
    status,
    isActive,
  }) => {
    const color = isActive ? '#439b57' : '#c12429';
    return (
      <div className={css(optionButtonContainerStyle)}>
        <Button
          title={status}
          styles={{
            fontSize: '10px',
            backgroundColor: color,
            cursor: 'off',
          }}
          {...statusButtonProps}
        />
      </div>
    );
  };

  const allowedValues: Array<'name' | 'email' | 'phone' | 'login'> = [
    'name',
    'email',
    'phone',
    'login',
  ];

  const searchBy: 'name' | 'email' | 'phone' | 'login' = allowedValues.includes(
    use.states.searchBy as 'name' | 'email' | 'phone' | 'login'
  )
    ? (use.states.searchBy as 'name' | 'email' | 'phone' | 'login')
    : 'name';

  const filtered = use.actions.filterBySearch(use.states.searchTerm, searchBy);

  const roles =
    use.actions.sortByProperty(filtered, searchBy, use.states.orderList) || [];

  const paginated = use.actions.getPaginated(
    roles,
    use.states.currentPage,
    use.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      const status = item.isActive ? 'Activo' : 'Inactivo';
      return [
        item.login,
        item.name,
        <ButtonEmail email={item.email} isActive={item.emailConfirmation} />,
        <ButtonPhone
          phone={formatPhoneNumber(item.phone)}
          isActive={item.phoneConfirmation}
        />,
        <ButtonStatus status={status} isActive={item.isActive} />,
        <ButtonUpdate id={item.id} />,
      ];
    }) ?? [];

  const headers = [
    'Login',
    'Nombre',
    'Email',
    'Teléfono',
    'Estatus',
    'Opciones',
  ];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(roles.length / use.states.itemsPerPage);

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Usuarios"
        items={items}
        headers={headers}
        columns={6}
        selectProps={{
          options: options,
          onChange: (event) => {
            if (event?.value) {
              use.actions.setOrderList(event.value as 'asc' | 'desc');
            }
          },
          defaultValue: valueDefaul,
          styles: {
            width: '50%',
          },
        }}
        selectByProps={{
          options: use.states.searchByOptions,
          onChange: (event) => {
            use.actions.changeSearchBy(event);
          },
          defaultValue: use.states.searchByDefault,
          styles: {
            width: '100%',
          },
        }}
        inputProps={{
          value: use.states.searchTerm,
          onChange: (e) => use.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar...',
        }}
        propsPagination={{
          currentPage: use.states.currentPage,
          setCurrentPage: use.actions.setCurrentPage,
          totalPages: totalPages,
        }}
        {...listProps}
      />
    </>
  );
};
