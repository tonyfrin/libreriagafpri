import { GeneralAttribute } from '../../../Validations';
import { PostsAttributes, CategoryAttributes } from '../../../states';
export interface ProductsAttributes {
    postsId: number;
    categoryId?: number | null | undefined;
    tags: string[];
    sku: string;
    name: string;
    publicName: string;
    description: string;
    image: string;
    galleryImage: string[];
    note: string;
    salesPrice?: number;
    price1?: number;
    price2?: number;
    price3?: number;
    price4?: number;
    price5?: number;
    type: string;
    taxStatus: string;
    taxClass: string;
    packageType: string;
    qtyPack: number;
    undCbm: number;
    attributes: GeneralAttribute[];
    statistics: object;
    weight: number;
    height: number;
    width: number;
    length: number;
    catalogOrder: number;
    reviews: boolean;
    discount: boolean;
    posts: PostsAttributes;
    category: CategoryAttributes;
}
interface ProductsData {
    data: {
        items: ProductsAttributes[] | [] | null;
    };
}
type DeletedProducts = {
    itemId: number;
};
type State = {
    items: ProductsData;
    isReady: boolean;
};
type Actions = {
    offItems: () => void;
    handleNewItem: (newItem: ProductsAttributes) => void;
    handleUpdated: (updatedItem: ProductsAttributes) => void;
    handleDeleted: ({ itemId }: DeletedProducts) => void;
    getById: (id: number) => ProductsAttributes | null;
    findBySku: (sku: string) => ProductsAttributes | null;
};
export type UseGafpriDataProductsReturn = {
    states: State;
    actions: Actions;
};
export type UseGafpriDataProductsProps = {
    token: string | null;
};
export declare function useGafpriDataProducts({ token, }: UseGafpriDataProductsProps): UseGafpriDataProductsReturn;
export {};
