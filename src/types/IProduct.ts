export type IProduct = {
  id: number,
  img: string,
  title: string,
  description: string,
  price: number,
  type: string,
  isAdded?: boolean,
} & ICartProduct
export interface ICartProduct {
  ProductCount: number
} 
