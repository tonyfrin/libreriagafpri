import { UseGafpriBankTypeReturn, SiteOptions } from '../../states';
export type InitBankProps = {
    use: UseGafpriBankTypeReturn;
    siteOptions: SiteOptions;
    returnModule: () => void;
};
export declare const InitBank: ({ use, siteOptions, returnModule, }: InitBankProps) => JSX.Element;
