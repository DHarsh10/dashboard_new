import { React, useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import SideBarStatus from "../utils/contexts/sideBarStatus";

import { menuItems } from "../data/sidebarData";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { isCollapsed, setIsCollapsed } = useContext(SideBarStatus);

  return (
    <Box className="h-full">
      <Sidebar
        collapsed={isCollapsed}
        className="h-full"
        rootStyles={{
          [`.css-dip3t8`]: {
            background: `${colors.primary[400]} !important`,
            borderRight: `1px solid ${colors.primary[300]}`,
          },
          [`.ps-menu-button:hover`]: {
            background: `${colors.primary[400]} !important`,
          },
          [`.ps-menu-button`]: {
            background: `${colors.primary[400]} !important`,
          },
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Harshith
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[400]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {menuItems.map((item, index) => {
              if (item.type === "title") {
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {item.label}
                  </Typography>
                );
              }
              return (
                <MenuItem
                  key={index}
                  component={<Link to={item.path} />}
                  icon={item.icon}
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
