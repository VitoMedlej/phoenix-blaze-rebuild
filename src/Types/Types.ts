export interface IProduct {
    title: string;
    price: number;
    stock ?:number | string;
    _id: string;
    newPrice?:number;
    inStock ?: boolean;
    description: string;
    sizes : {
        size: number;
        price: number;
      }[] | null;
    images: string[] | [];
    attributes ?: [] | 
        {
            name : string,
            value : string | number
        }[]
    ;
    category : string;
    isFeatured?: boolean;
}
export interface ICartItem {
    title: string;
    stock: number;
    _id: string;
    productselectedColor: any;
    price: number;
    img : string;
    qty : number;
    onChange ?: () => void;
    category ?: string;
    remove: (id:string) => void;
    shortdesc ?: string;
    productselectedSize ?: any;
}