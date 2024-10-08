import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { css } from '@emotion/css';
import { Button, ButtonProps } from '../../Button';
import { Header, HeaderProps } from '../../Header';
import { Error, ErrorProps } from '../../Error';
import { List, ListPropsExtended } from '../../List';
import type {
  UseGafpriShippingAreasReturn,
  UseLoginReturn,
} from '../../../states';

export type InitShippingAreasProps = {
  use: UseGafpriShippingAreasReturn;
  useLogin: UseLoginReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

export type InitShippingAreasExtended = {
  use?: UseGafpriShippingAreasReturn;
  useLogin?: UseLoginReturn;
  optionsButtonMainContainerStyle?: string;
  updateButtonProps?: ButtonProps;
  deleteButtonProps?: ButtonProps;
  headerProps?: HeaderProps;
  errorProps?: ErrorProps;
  listProps?: ListPropsExtended;
};

const defaultOptionsButtonMainContainerStyle = css`
  display: flex;
  justify-content: space-evenly;
`;

export const InitShippingAreas = ({
  use,
  useLogin,
  optionsButtonMainContainerStyle = defaultOptionsButtonMainContainerStyle,
  updateButtonProps = {
    title: 'Actualizar',
    styles: {
      fontSize: '10px',
    },
  },
  deleteButtonProps = {
    title: 'Eliminar',
    styles: {
      backgroundColor: '#c12429',
      fontSize: '10px',
    },
  },
  headerProps = {
    title: 'Zonas de envíos',
    buttonLargeProps: {
      label: 'Añadir zona de envío',
      onClick: use.pages.actions.goAdd,
      Icon: FaPlus,
      titleButton: 'Agregar',
      description: 'Agrega una nueva zona.',
    },
  },
  errorProps = {
    error: use.error.states.error,
  },
  listProps,
}: InitShippingAreasProps): JSX.Element => {
  const erase = async (id: number): Promise<void> => {
    if (use.attributes.actions.validationButtonNext()) {
      try {
        use.pages.actions.onFetching();
        const data = await use.api.actions.erase(id);
        if (data.success) {
          use.data.actions.handleDeleted({ itemId: id });
        } else {
          use.error.actions.changeError([data.message]);
        }
      } catch (error) {
        use.error.actions.changeError([`${error}`]);
      } finally {
        use.pages.actions.onInit();
      }
    }
  };

  const ButtonUpdate: React.FC<{ id: number }> = ({ id }) => {
    return (
      <div className={css(optionsButtonMainContainerStyle)}>
        <Button
          buttonProps={{
            onClick: () => use.pages.actions.goUpdate(id),
          }}
          {...updateButtonProps}
        />
        <Button
          buttonProps={{
            onClick: () => erase(id),
          }}
          {...deleteButtonProps}
        />
      </div>
    );
  };

  const filtered = use.paginations.actions.filterByName(
    use.data.states.items,
    use.paginations.states.searchTerm
  );

  const areas =
    use.paginations.actions.sortByName(
      filtered,
      use.paginations.states.orderList
    ) || [];

  const paginated = use.paginations.actions.getPaginated(
    areas,
    use.paginations.states.currentPage,
    use.paginations.states.itemsPerPage
  );

  const items =
    paginated?.map((item) => {
      return [item.name, <ButtonUpdate id={item.id} />];
    }) ?? [];

  const headers = ['Nombre', 'Opciones'];

  const options = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ];

  const valueDefaul =
    use.paginations.states.orderList === 'asc'
      ? { value: 'asc', label: 'Ascendente' }
      : { value: 'desc', label: 'Descendente' };

  const totalPages = Math.ceil(
    areas.length / use.paginations.states.itemsPerPage
  );

  useEffect(() => {
    const get = async (): Promise<void> => {
      if (useLogin.states.token && !use.data.states.isReady) {
        try {
          use.pages.actions.onFetching();
          use.data.actions.setIsReady(false);
          const data = await use.data.actions.getItems();
          if (data.success) {
            use.data.actions.setItems(data.data.items);
            use.data.actions.setIsReady(true);
          } else {
            use.error.actions.changeError([data.message]);
            use.data.actions.setIsReady(false);
          }
        } catch (error) {
          use.error.actions.changeError([`${error}`]);
          use.data.actions.setIsReady(false);
        } finally {
          use.pages.actions.onInit();
        }
      }
    };

    const getMethods = async (): Promise<void> => {
      if (
        useLogin.states.token &&
        !use.useShippingMethoods.data.states.isReady
      ) {
        try {
          use.useShippingMethoods.data.actions.setIsReady(false);
          const data = await use.useShippingMethoods.data.actions.getItems();
          if (data.success) {
            use.useShippingMethoods.data.actions.setItems(data.data.items);
            use.useShippingMethoods.data.actions.setIsReady(true);
          } else {
            use.error.actions.changeError([data.message]);
            use.useShippingMethoods.data.actions.setIsReady(false);
          }
        } catch (error) {
          use.error.actions.changeError([`${error}`]);
          use.useShippingMethoods.data.actions.setIsReady(false);
        }
      }
    };

    get();
    getMethods();
  }, [useLogin.states.token, use.useShippingMethoods.data.states.isReady]);

  return (
    <>
      <Header {...headerProps} />
      <Error {...errorProps} />
      <List
        title="Zonas"
        items={items}
        headers={headers}
        columns={2}
        selectProps={{
          options: options,
          onChange: (event) => {
            if (event?.value) {
              use.paginations.actions.setOrderList(
                event.value as 'asc' | 'desc'
              );
            }
          },
          defaultValue: valueDefaul,
          styles: {
            width: '50%',
          },
        }}
        inputProps={{
          value: use.paginations.states.searchTerm,
          onChange: (e) =>
            use.paginations.actions.setSearchTerm(e.target.value),
          placeholder: 'Buscar por nombre...',
        }}
        propsPagination={{
          currentPage: use.paginations.states.currentPage,
          setCurrentPage: use.paginations.actions.setCurrentPage,
          totalPages: totalPages,
        }}
        {...listProps}
      />
    </>
  );
};
