import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";
import MyInput from "./components/MyInput";
import MySelect from "./components/MySelect";
interface Props {
  MyProducts: IProduct[];
  setMyFilteredProductes: (data: IProduct[]) => void;
}
const Sorting: FC<Props> = ({ MyProducts, setMyFilteredProductes }) => {
  const [ProductType, setProductType] = useState("");
  const [ProductTitle, setProductTitle] = useState("");
  const MyHandleSearch = (ProductTitle: string, ProductType: string) => {
    let data = [...MyProducts];
    if (ProductTitle) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(ProductTitle.toLowerCase())
      );
    }
    if (ProductType) {
      data = data.filter((p) => p.type.includes(ProductType));
    }
    setMyFilteredProductes(data);
  };
  useEffect(() => {
    MyHandleSearch(ProductTitle, ProductType);
  }, [ProductTitle, ProductType]);
  return (
    <Box
      sx={{
        widht: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "40px",
      }}
      component={"form"}
    >
      <MyInput ProductTitle={ProductTitle} setProductTitle={setProductTitle} />
      <MySelect ProductType={ProductType} setProductType={setProductType} />
    </Box>
  );
};
//
export default Sorting;
