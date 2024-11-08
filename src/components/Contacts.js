import React from "react";
import Header from "./Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { mockDataContacts } from "../data/data";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];
  return (
    <div>
      <Header
        heading="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box>
        <Box
          sx={{
            height: "67vh",
            width: "100%",
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },

            "& .MuiDataGrid-toolbarContainer .MuiButtonBase-root ": {
              color: colors.primary[100],
            },
          }}
          className="mt-4"
        >
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Contacts;
