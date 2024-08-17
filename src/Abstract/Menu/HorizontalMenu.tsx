import { css, cx } from '@emotion/css';
import React from 'react';
import { IconType } from 'react-icons';

interface MenuItemProps {
  label: string;
  onClick: () => void;
  icon?: IconType;
}

// Estilos Emotion para el componente MenuItem
const menuItemStyles = css`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 5px;
  }
`;

// Componente para un ítem del menú
const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  icon: Icon,
}: MenuItemProps) => {
  return (
    <div className={cx(menuItemStyles)} onClick={onClick}>
      {Icon && <Icon size={20} />} {/* Renderiza el icono si está presente */}
      {label}
    </div>
  );
};

export interface HorizontalMenuProps {
  items: MenuItemProps[];
}

// Estilos Emotion para el componente Menu
const menuStyles = css`
  display: flex;
  padding-left: 38px;
`;

// Componente para el menú
export const HorizontalMenu: React.FC<HorizontalMenuProps> = ({
  items,
}: HorizontalMenuProps) => {
  return (
    <div className={cx(menuStyles)}>
      {items.map((item) => (
        <MenuItem key={item.label} {...item} />
      ))}
    </div>
  );
};
