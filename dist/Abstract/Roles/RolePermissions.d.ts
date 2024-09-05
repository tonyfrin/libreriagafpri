import React from 'react';
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
export declare const RolePermissions: React.FC<RolePermissionsProps>;
export {};
