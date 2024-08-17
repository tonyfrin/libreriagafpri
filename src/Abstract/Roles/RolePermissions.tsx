import React, { ChangeEvent } from 'react';
import { css } from '@emotion/css';

const defaultMainContainerStyle = css`
  margin-bottom: 1rem;
`;

const defaultTitleContainerStyle = css`
  transition: all 1s ease 0s;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: rgb(38, 35, 33);
  display: table-cell;
  width: auto;
  padding-bottom: 20px;
  vertical-align: middle;
  line-height: 1.25rem;
`;

const defaultCheckBoxContainerStyle = css`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
`;

const defaultNameStyle = css`
  margin-left: 0.25rem;
`;

const defaultInfoContainerStyle = css`
  display: flex;
  justify-content: space-around;
  margin-bottom: 45px;
`;

const defaultCheckBoxStyle = css``;

interface Permission {
  name: string;
  value: string;
}

interface Role {
  name: string;
  permissions: Permission[];
}

export interface RolePermissionsProps {
  role: Role;
  onPermissionChange: (permissionValue: string, checked: boolean) => void;
  selectedPermissions: string[];
  mainContainerStyle?: string;
  titleContainerStyle?: string;
  infoContainerStyle?: string;
  checkBoxContainerStyle?: string;
  checkBoxStyle?: string;
  nameStyle?: string;
}

export interface RolePermissionsPropsExtended {
  role?: Role;
  onPermissionChange?: (permissionValue: string, checked: boolean) => void;
  selectedPermissions?: string[];
  mainContainerStyle?: string;
  titleContainerStyle?: string;
  infoContainerStyle?: string;
  checkBoxContainerStyle?: string;
  checkBoxStyle?: string;
  nameStyle?: string;
}

export const RolePermissions: React.FC<RolePermissionsProps> = ({
  role,
  onPermissionChange,
  selectedPermissions,
  mainContainerStyle = defaultMainContainerStyle,
  titleContainerStyle = defaultTitleContainerStyle,
  infoContainerStyle = defaultInfoContainerStyle,
  checkBoxContainerStyle = defaultCheckBoxContainerStyle,
  checkBoxStyle = defaultCheckBoxStyle,
  nameStyle = defaultNameStyle,
}) => {
  const handlePermissionChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPermissionChange(event.target.value, event.target.checked);
  };

  return (
    <>
      <div className={css(mainContainerStyle)}>
        <div className={css(titleContainerStyle)}>{role.name}</div>
        <div className={css(infoContainerStyle)}>
          {role.permissions.map((permission) => (
            <label
              key={permission.value}
              className={css(checkBoxContainerStyle)}
            >
              <input
                type="checkbox"
                value={permission.value}
                onChange={handlePermissionChange}
                checked={selectedPermissions.includes(permission.value)}
                className={css(checkBoxStyle)}
              />
              <span className={css(nameStyle)}>{permission.name}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
