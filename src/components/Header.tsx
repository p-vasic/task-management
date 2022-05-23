import { FC } from "react";
import { AppBar, Box, Typography } from "@mui/material";

const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <Box>
      <AppBar position="static" sx={{ padding: "16px 20px" }}>
        <Typography variant="h5" textAlign="left">
          Task Management &gt; {title}
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Header;
