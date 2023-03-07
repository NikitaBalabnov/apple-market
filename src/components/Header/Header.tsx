import { AppBar, Toolbar } from "@mui/material";
import { FC } from "react";
import "./Header.scss";
import HeaderLogo from "./components/HeaderLogo";
import ShoppingCart from "./components/ShoppingCart";
type Props = {
  onClick: any;
};
const Header: FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <>
      <AppBar sx={{ maxHeight: "64px" }} position="static" color="primary">
        <Toolbar sx={{ alignItems: "center", marginBottom: "13px" }}>
          <HeaderLogo />
          <ShoppingCart onClick={onClick} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
