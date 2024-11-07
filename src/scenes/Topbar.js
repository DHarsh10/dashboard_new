import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";

import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { NotificationsOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { PersonOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const toggleTheme = () => {
    colorMode.toggleColorMode();
  };

  return (
    <div>
      <Box
        className="flex p-4 align-middle justify-between"
        borderBottom={`1px solid ${colors.primary[300]}`}
      >
        <Box
          backgroundColor={colors.primary[400]}
          className="px-2 py-1 rounded-sm"
        >
          <InputBase placeholder="Search" />
        </Box>

        <Box>
          <IconButton onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>

          <IconButton>
            <NotificationsOutlined />
          </IconButton>

          <IconButton>
            <SettingsOutlined />
          </IconButton>

          <IconButton>
            <PersonOutlined />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Topbar;
