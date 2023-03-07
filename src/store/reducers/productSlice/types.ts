import  {IProduct}  from '../../../types/IProduct';

export interface IProductSlice {
    products: IProduct[],
    isLoading: boolean,
    isError: string,
}