import { React } from "react";
import Header from "./Header";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { mockDataTeam } from "../data/data";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box className="flex items-center h-full">
            <Box
              sx={{
                backgroundColor:
                  access === "user"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[800],
              }}
              className="min-w-[70%] py-1 px-2 rounded flex gap-2 "
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography>{access}</Typography>
            </Box>
          </Box>
        );
      },
    },
  ];
  return (
    <div>
      <Header heading="TEAM" subTitle="Managing the Team Members" />

      <Box>
        <Box
          sx={{
            height: "70vh",
            width: "100%",
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
          }}
          className="mt-4"
        >
          <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    </div>
  );
};

export default Team;
