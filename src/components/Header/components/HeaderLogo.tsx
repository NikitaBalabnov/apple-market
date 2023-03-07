import { FC } from "react";
import { Box, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";

const HeaderLogo: FC = () => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        transition: " color .2s ease-out",
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        color: "white",
        ":hover": { color: "rgb(233, 233, 233)" },
      }}
      className="HeaderLogo"
    >
      <AppleIcon color={"inherit"} fontSize="large" />
      <Typography
        variant="h6"
        color={"inherit"}
        component="div"
        sx={{ mt: "4px", ml: "10px" }}
      >
        MyApple
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
