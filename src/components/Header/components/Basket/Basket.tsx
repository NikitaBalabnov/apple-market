import { Drawer, List, ListItem } from "@mui/material";
import { FC, useMemo, useState } from "react";
import BasketListItem from "./components/BasketListItem";
import "./Basket.scss";
import { useTypedSelector } from "../../../../store/hooks/typedReduxHooks";
type Props = {
  order?: string;
  removeFromorder?: string;
  cartOpen: boolean;
  closeCart: any;
};
const Basket: FC<Props> = (props) => {
  const { addedProducts } = useTypedSelector((state) => state.cart);
  const { cartOpen, closeCart = Function.prototype } = props;
  const [TotalAmount, setTotalAmount] = useState<number>(0);
  useMemo(() => {
    setTotalAmount(
      addedProducts.reduce(
        (total, product) => total + product.ProductCount * product.price,
        0
      )
    );
  }, [addedProducts]);
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List className="BasketList">
        {addedProducts.length === 0 ? (
          <ListItem>Your cart is empty</ListItem>
        ) : (
          addedProducts.map((product) => {
            return (
              <BasketListItem
                key={product.id}
                img={product.img}
                description={product.description}
                price={product.price}
                type={product.type}
                title={product.title}
                id={product.id}
                ProductCount={product.ProductCount}
              />
            );
          })
        )}
        {addedProducts.length > 0 ? (
          <ListItem className="BasketList-totalAmount">
            Total Amount: {TotalAmount.toLocaleString() + " Kč"}
          </ListItem>
        ) : (
          <div className=""></div>
        )}
      </List>
    </Drawer>
  );
};
{
}
export default Basket;
