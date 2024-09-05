import React from 'react';
import type { ButtonProps } from '../Button';
export interface PaginationProps {
    currentPage: number;
    setCurrentPage: (value: number) => void;
    totalPages: number;
    mainContainerStyle?: string;
    buttonStyle?: ButtonProps['styles'];
    inactiveButtonStyle?: ButtonProps['styles'];
    textStyle?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
