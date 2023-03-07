import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import "./../Header.scss";
import { useTypedSelector } from "../../../store/hooks/typedReduxHooks";
type Props = {
  onClick: any;
};
const ShoppingCart: FC<Props> = (props) => {
  const productsCount = useTypedSelector(
    (state) => state.cart.addedProducts.length
  );
  return (
    <Badge
      className="ShoppingCartBadge"
      badgeContent={productsCount}
      color="secondary"
    >
      <IconButton
        onClick={props.onClick}
        sx={{ width: "50px", height: "50px" }}
      >
        <ShoppingCartIcon
          className="CartButton"
          sx={{ color: "#fff", fontSize: "29px" }}
        />
      </IconButton>
    </Badge>
  );
};

export default ShoppingCart;
