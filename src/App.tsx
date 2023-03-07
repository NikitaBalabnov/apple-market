import { useEffect, useState } from "react";
import "./App.scss";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Sorting from "./components/Sorting/Sorting";
import Basket from "./components/Header/components/Basket/Basket";
import Products from "./components/Products/Products";
import {
  useAppDispatch,
  useTypedSelector,
} from "./store/hooks/typedReduxHooks";
import { fetchProducts } from "./store/reducers/productSlice/productSlice";
import { cartLoading } from "./store/reducers/cartSlice/cartSlice";
function App() {
  const products = useTypedSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const [cartOpen, setCartOpen] = useState(false);
  const [MyFilteredProductes, setMyFilteredProductes] = useState(products);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(cartLoading());
  }, []);
  return (
    <>
      <Container maxWidth={"xl"}>
        <div className="App">
          <Header onClick={() => setCartOpen(true)} />
          <Sorting
            MyProducts={products}
            setMyFilteredProductes={setMyFilteredProductes}
          />
          <Products MyProducts={MyFilteredProductes} />
        </div>
      </Container>
      <Basket cartOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </>
  );
}
export default App;
