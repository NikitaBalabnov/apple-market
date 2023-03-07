import { FC } from "react";
import { useTypedSelector } from "../../store/hooks/typedReduxHooks";
import { IProduct } from "../../types/IProduct";
import MyProductCard from "./components/MyProductCard";
import "./MyProductsCart.scss";
type Props = {
  MyProducts: IProduct[];
};

const Products: FC<Props> = ({ MyProducts }) => {
  const { isLoading, products } = useTypedSelector((state) => state.products);
  return (
    <div className="Products">
      {isLoading ? (
        <h4 className="">Loading...</h4>
      ) : (
        <div className="Products">
          {MyProducts.length > 0
            ? MyProducts.map((product) => (
                <MyProductCard
                  key={product.id}
                  description={product.description}
                  id={product.id}
                  img={product.img}
                  price={product.price}
                  title={product.title}
                  type={product.type}
                />
              ))
            : products.map((product) => (
                <MyProductCard
                  key={product.id}
                  description={product.description}
                  id={product.id}
                  img={product.img}
                  price={product.price}
                  title={product.title}
                  type={product.type}
                />
              ))}
        </div>
      )}
    </div>
  );
};

export default Products;
