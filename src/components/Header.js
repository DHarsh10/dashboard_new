import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Header = ({ heading, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", color: `${colors.grey[100]}` }}
        >
          {heading}
        </Typography>
        <Typography sx={{ color: `${colors.greenAccent[400]}` }}>
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
