import {
  Button,
  Card,
  CardActions, 
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useAppDispatch } from "../../../store/hooks/typedReduxHooks";
import { addToCart } from "../../../store/reducers/cartSlice/cartSlice";
import Quantity from "../../../UI/Quantity";
import "./../MyProductsCart.scss";
interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
  id: number;
  type: string;
  isAdded?: boolean;
  onClick?: () => void;
}

const MyProductCard: FC<Props> = ({
  img,
  title,
  description,
  price,
  id,
  type,
}) => {
  const dispatch = useAppDispatch()
  const [ProductCount, setProductCount] = useState(1);
  const [TotalPrice, setTotalPrice] = useState(price);
  function IncrementTotalPrice() {
    setTotalPrice((prev) => prev + price);
  }
  function DecrementTotalPrice() {
    setTotalPrice((prev) => prev - price);
  }
  function AddToCart(
    img: string,
    title: string,
    description: string,
    CurrentPrice: number,
    id: number,
    type: string,
    ProductCount: number,
    price: number,
  ) {
    const product = {
      img,
      title,
      description,
      price,
      id: id * Date.now(),
      type,
      ProductCount 
    };
    setProductCount(1);
    setTotalPrice(price);
    dispatch(addToCart(product))
  }
  return (
    <Card className="Products_item">
      <div className="Products_img">
        <CardMedia
          style={{ scale: type == "Mac" ? "1.8" : "1.2" }}
          className=""
          component="img"
          height="200"
          image={img}
          alt={title}
        />
      </div>
      <CardContent className="Products_item-content">
        <Typography
          className="Products_item-text"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          className="Products_item-text"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className="ProductCartActions">
        <Button
          className="ProductCardActions-addCart"
          onClick={() =>
            AddToCart(
              img,
              title,
              description,
              TotalPrice,
              id,
              type,
              ProductCount,
              price
            )
          }
          size="small"
        >
          Add to the cart
        </Button>
        <Quantity
          setProductCount={setProductCount}
          ProductCount={ProductCount}
          className="Quantity"
          price={price}
          IncrementTotalPrice={IncrementTotalPrice}
          DecrementTotalPrice={DecrementTotalPrice}
        />
        <Typography
          className="ProductCardActions-pricing"
          gutterBottom
          variant="body1"
          component="div"
        >
          {TotalPrice.toLocaleString() + " Kč"}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default MyProductCard;
