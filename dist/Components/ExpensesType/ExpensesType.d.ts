import type { UseGafpriExpensesTypeReturn } from 'src/states';
import type { InitExpensesTypePropsExtended, ExpensesTypeFormPropsExtended } from '../../Abstract';
export type ExpensesTypeProps = {
    use: UseGafpriExpensesTypeReturn;
    initProps?: InitExpensesTypePropsExtended;
    addFormProps?: ExpensesTypeFormPropsExtended;
    updateFromProps?: ExpensesTypeFormPropsExtended;
};
export type ExpensesTypePropsExtended = {
    use: UseGafpriExpensesTypeReturn;
    initProps?: InitExpensesTypePropsExtended;
    addFormProps?: ExpensesTypeFormPropsExtended;
    updateFromProps?: ExpensesTypeFormPropsExtended;
};
export declare const ExpensesType: ({ use, initProps, addFormProps, updateFromProps, }: ExpensesTypeProps) => JSX.Element;
