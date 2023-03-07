import { IProduct } from './../../../types/IProduct';
export interface ICart {
    addedProducts: IProduct[],
    productCount: number,
    isError: ''
}