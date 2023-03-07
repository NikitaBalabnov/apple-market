import { TextField } from "@mui/material";
import { FC } from "react";
type Props = {
  ProductTitle: string;
  setProductTitle: (value: string) => void;
};
const MyInput: FC<Props> = ({ ProductTitle, setProductTitle }) => {
  return (
    <TextField
      value={ProductTitle}
      onChange={(e) => setProductTitle(e.target.value)}
      className="MyInput"
      sx={{ ":hover": { outline: "rgb(26, 181, 181)" } }}
      size="small"
      id="outlined-basic"
      label="Search"
      variant="outlined"
    />
  );
};

export default MyInput;
