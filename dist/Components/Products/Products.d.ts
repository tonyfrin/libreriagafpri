import type { UseGafpriProductsReturn, SiteOptions } from '../../states';
export type ProductsProps = {
    use: UseGafpriProductsReturn;
    sitesOptions: SiteOptions;
};
export declare const Products: ({ use, sitesOptions }: ProductsProps) => JSX.Element;
